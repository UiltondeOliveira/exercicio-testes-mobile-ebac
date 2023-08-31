class FormScreen {
 
    get #menuForm(){
        return $('~Forms')
    }

    get #inputField(){
        return $('~text-input')
    }

    get #switch(){
        return $('~switch')
    }

    get #dropdown(){
        return $('~Dropdown')
    }

    get #buttonActive(){
        return $('~button-Active')
    }

    async goToForm(){
        this.#menuForm.click()
    }

    async typeText(text){
        this.#inputField.setValue(text)
    }

    async enableSwitch(){
        this.#switch.click()
    }

    async selectOptionIntoDropdown(){
        this.#dropdown.click()
        await $('android=new UiSelector().text("Appium is awesome")').click()
    }

    async activeButton(){
        this.#buttonActive.click()
    }
}

module.exports = new FormScreen()