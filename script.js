document.addEventListener("DOMContentLoaded", function () {
    function negative(elementOne) {
        elementOne.style.opacity = '0'
        elementOne.style.zIndex = '-1'
    }
    function positive(elementTow) {
        elementTow.style.opacity = '1'
        elementTow.style.zIndex = '1'
    }
    
    // LOGIN

    var mainPage = document.getElementById('mainPage'),
        login = document.getElementById('login'),
        loginPage = document.getElementById('login-page'),
        idCard = document.getElementById('id-card'),
        password = document.getElementById('password'),
        loader = document.getElementById('loader'),
        loadField = document.getElementById('loadField')

    login.addEventListener("click", function (event) {
        event.preventDefault()
        if (idCard.value != 22908200400489 && password != 'frontend04') {
            alert(new Error('Error'))
        } else {
            negative(loginPage)
            positive(loadField)
            loader.style.display = 'block'
            setTimeout(() => {
                positive(mainPage)
                negative(loadField)
                loader.style.display = 'none'
            }, 5000)

        }
    })

    // LOGIN



    // MAINPAGE
    var map1 = document.getElementById('map1'),
        add = document.getElementById('add')
    profile = document.getElementById('profile'),
        popup = document.getElementById('popup'),
        back = document.getElementById('back')
    var burger = document.getElementById('burger'),
        mapBtn = document.getElementById('mapBtn'),
        addBtn = document.getElementById('addBtn'),
        profBtn = document.getElementById('profBtn')
    var arrOfChapters = [map1, add, profile],
        arrOfBtns = [mapBtn, addBtn, profBtn]


    // REVIEW
    burger.addEventListener("click", function () {
        popup.style.width = '30%'
        burger.style.display = 'none'
    })
    back.addEventListener("click", function () {
        popup.style.width = 0
        burger.style.display = 'block'
    })
    // REVIEW


    // ПЕРЕХОД МЕЖДУ РАЗДЕЛАМИ
    arrOfBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            arrOfBtns.forEach((it) => {
                it.style.color = 'gray'
            })
            btn.style.color = 'green'
            for (let i of arrOfChapters) {
                negative(i)
            }
            if (btn === arrOfBtns[0]) {
                arrOfChapters[0].style.zIndex = 0
                arrOfChapters[0].style.opacity = 1
                burger.style.display = 'block'
            }
            else if (btn === arrOfBtns[1]) {
                positive(arrOfChapters[1])
                burger.style.display = 'none'
            }
            else if (btn === arrOfBtns[2]) {
                positive(arrOfChapters[2])
                burger.style.display = 'none'
            }
        })
    })
    // ПЕРЕХОД МЕЖДУ РАЗДЕЛАМИ

})
