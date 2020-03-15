import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: '中文',
    messages: {
        '中文': require('@/assets/languages/zh.json'),
        'English': require('@/assets/languages/en.json')
    }
})

export default i18n