import videoComponent from './video';
var $vm
export default {
    install(Vue) {
        let Video = Vue.extend(videoComponent)
        if (!$vm) {
            let videoDom = document.createElement('div');
            videoDom.className = 'logger-video'
            $vm = new Video({
                el: videoDom
            })
            document.body.appendChild($vm.$el)
        }
        const videoPreview = {
            open(src, title) {
                $vm.open(src, title)
            },
            close() {
                $vm.close()
            }
        }
        Vue.$videoPreview = videoPreview
        Vue.mixin({
            created: function () {
                this.$videoPreview = Vue.$videoPreview
            }
        })
    }
}
