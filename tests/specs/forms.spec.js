const formScreen = require("../screens/forms.screen");

describe('Acesso ao menu forms', () => {
    it('Deve relizar cadastro com sucesso', async () => {

        await formScreen.goToForm()
        await driver.pause(500)
        await formScreen.typeText('Meu texto aqui')
        await driver.pause(500)
        await formScreen.enableSwitch()
        await driver.pause(500)
        await formScreen.selectOptionIntoDropdown()
        await driver.pause(500)
        await formScreen.activeButton()
        await driver.pause(500)

        expect(await $('android.widget.FrameLayout')).toBeDisplayed()
        await driver.pause(500)       

    });
});