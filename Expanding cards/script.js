/*
 * @Author: yang-chaofan 2372696060@qq.com
 * @Date: 2025-09-13 18:47:11
 * @LastEditors: yang-chaofan 2372696060@qq.com
 * @LastEditTime: 2025-09-15 16:53:43
 * @FilePath: \vscode\Expanding cards\script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('cilck',() => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}