import Scrollbar from 'smooth-scrollbar'
import Snackbar from 'node-snackbar'

const $ = require('jquery')

if (typeof window !== 'undefined') {
  window.$ = $
  window.jQuery = $
  require('bootstrap/js/src/tab')
}

export const vito = {
  index () {
    this.loaderInit()
    this.owlCarousel()
    this.SmoothScrollbar()
    this.Accordian()
  },
  mainIndex () {
    this.ripple()
    this.fullscreen()
    this.sideBarToggle()
    this.navBarAction()
    this.AccordianInit()
    this.fixedHeader()
    this.chat()
  },
  loaderInit () {
    $('#load').fadeOut()
    $('#loading').delay(1000).fadeOut('slow')
  },
  fixedHeader () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 75) {
        $('.iq-top-navbar').addClass('fixed-header')
      } else {
        $('.iq-top-navbar').removeClass('fixed-header')
      }
    })
  },
  ripple () {
    $(document).on('click', '.iq-waves-effect', function (e) {
      // Remove any old one
      $('.ripple').remove()
      // Setup
      const posX = $(this).offset().left
      const posY = $(this).offset().top
      let buttonWidth = $(this).width()
      let buttonHeight = $(this).height()

      // Add the element
      $(this).prepend("<span class='ripple'></span>")

      // Make it round!
      if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth
      } else {
        buttonWidth = buttonHeight
      }

      // Get the center of the element
      const x = e.pageX - posX - buttonWidth / 2
      const y = e.pageY - posY - buttonHeight / 2

      // Add the ripples CSS and start the animation
      $('.ripple').css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
      }).addClass('rippleEffect')
    })
  },

  fullscreen () {
    const elementExist = this.checkElement('class', 'iq-full-screen')
    if (elementExist) {
      $(document).on('click', '.iq-full-screen', function () {
        const elem = $(this)
        if (!document.fullscreenElement &&
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen()
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        }
        elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line')
      })
    }
  },
  triggerSet () {
    const elementExist = this.checkElement('class', 'wrapper-menu')
    if (elementExist) {
      const wrapperMenu = document.querySelector('.wrapper-menu')
      const body = document.querySelector('body')
      this.sidebarMiniSetEvent(wrapperMenu, body)
      /* for (let i = 0; i < wrapperMenu.length; i++) {
      } */
    }
  },

  sidebarMiniSetEvent (element, target) {
    element.classList.toggle('open')
    target.classList.toggle('sidebar-main')
  },
  checkClass (ele, type, className) {
    switch (type) {
      case 'addClass':
        if (!ele.hasClass(className)) {
          ele.addClass(className)
        }
        break
      case 'removeClass':
        if (ele.hasClass(className)) {
          ele.removeClass(className)
        }
        break
      case 'toggleClass':
        ele.toggleClass(className)
        break
    }
  },

  sideBarToggle () {
    const elementExist = this.checkElement('class', 'iq-sidebar-menu')
    if (elementExist) {
      $(document).on('click', '.iq-sidebar-menu li', function () {
        if ($(this).hasClass('menu-open')) {
          $(this).find('.iq-submenu').slideUp('slow')
          vito.checkClass($(this), 'removeClass', 'menu-open')
          if (!$(this).find('.iq-submenu.menu-open .menu-open').length) {
            vito.checkClass($(this).find('.menu-open'), 'removeClass', 'menu-open')
          } else {
            vito.checkClass($(this).find('.iq-submenu'), 'removeClass', 'menu-open')
          }
        } else if ($(this).find('.iq-submenu').length) {
          $(this).find('.iq-submenu').slideDown('slow')
          vito.checkClass($(this), 'addClass', 'menu-open')
          vito.checkClass($(this).find('.iq-submenu'), 'addClass', 'menu-open')
        }
      })
    }
  },

  navBarAction () {
    $(document).on('click', '.iq-sub-dropdown', function (e) {
      e.stopPropagation()
    })
    $(document).on('click', function (e) {
      const myTargetElement = e.target
      let selector, mainElement
      if ($(myTargetElement).hasClass('search-toggle') || $(myTargetElement).parent().hasClass('search-toggle') || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
        if ($(myTargetElement).hasClass('search-toggle')) {
          selector = $(myTargetElement).parent()
          mainElement = $(myTargetElement)
        } else if ($(myTargetElement).parent().hasClass('search-toggle')) {
          selector = $(myTargetElement).parent().parent()
          mainElement = $(myTargetElement).parent()
        } else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
          selector = $(myTargetElement).parent().parent().parent()
          mainElement = $(myTargetElement).parent().parent()
        }
        if (!mainElement.hasClass('active') && $('.navbar-list li').find('.active')) {
          $('.navbar-list li').removeClass('iq-show')
          $('.navbar-list li .search-toggle').removeClass('active')
        }

        selector.toggleClass('iq-show')
        mainElement.toggleClass('active')

        e.preventDefault()
      } else if ($(myTargetElement).is('.search-input')) {} else {
        $('.navbar-list li').removeClass('iq-show')
        $('.navbar-list li .search-toggle').removeClass('active')
      }
    })
  },

  checkElement (type, element) {
    let found = false
    let elements
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element)
        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true
        }
        break

      case 'id':
        elements = document.getElementById(element)

        if (elements !== undefined && elements !== null) {
          found = true
        }
        break
    }
    return found
  },

  owlCarousel () {
    const elementExist = this.checkElement('class', 'owl-carousel')
    if (elementExist) {
      require('owl.carousel/dist/owl.carousel')
      // eslint-disable-next-line no-undef
      $('.owl-carousel').each(function () {
        // eslint-disable-next-line no-undef
        const $carousel = $(this)
        $carousel.owlCarousel({
          items: $carousel.data('items'),
          loop: $carousel.data('loop'),
          margin: $carousel.data('margin'),
          nav: false,
          dots: $carousel.data('dots'),
          autoplay: $carousel.data('autoplay'),
          autoplayTimeout: $carousel.data('autoplay-timeout'),
          navText: ['<i class="fas fa-angle-left fa-2x"></i>', '<i class="fas fa-angle-right fa-2x"></i>'],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data('items-mobile-sm')
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data('items-mobile')
            },
            // breakpoint from 786 up
            786: {
              items: $carousel.data('items-tab')
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data('items-laptop')
            },
            1199: {
              items: $carousel.data('items')
            }
          }
        })
      })
    }
  },

  SmoothScrollbar () {
    const elementExistMain = this.checkElement('id', 'sidebar-scrollbar')
    if (elementExistMain) {
      Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
    }
    const elementExistRight = this.checkElement('id', 'right-sidebar-scrollbar')
    if (elementExistRight) {
      Scrollbar.init(document.querySelector('#right-sidebar-scrollbar'))
    }
  },

  Accordian () {
    $('.iq-accordion .iq-accordion-block .accordion-details').hide()
    $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow')
  },

  AccordianInit () {
    $(document).on('click', '.iq-accordion .iq-accordion-block', function () {
      if ($(this).children('div.accordion-details ').is(':hidden')) {
        $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow')
        $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow')
      }
    })
  },

  getActiveLink (item, activeRoute) {
    let active = false
    if (item.children !== undefined) {
      item.children.filter(function (child) {
        if (child.link.name === activeRoute) {
          active = true
        }
      })
    } else {
      if (item.link.name === activeRoute) {
        active = true
      }
    }
    return active
  },
  showSnackbar (type, data = {}) {
    if (type !== null) {
      switch (type) {
        case 'success':
          Snackbar.show({ text: data, backgroundColor: '#323232' })
          break
        case 'error':
          Snackbar.show({ text: data, backgroundColor: '#b21f2d', actionTextColor: '#ffffff' })
          break
      }
    } else {
      Snackbar.show(data)
    }
  },
  Snackbar (data) {
    Snackbar.show(data)
  },
  chat () {
    $('#chat-start').click(function () {
      $('.chat-data-left').toggleClass('show')
    })
    $('.close-btn-res').click(function () {
      $('.chat-data-left').removeClass('show')
    })
    $('.iq-chat-ui li').click(function () {
      $('.chat-data-left').removeClass('show')
    })
    $('.sidebar-toggle').click(function () {
      $('.chat-data-left').addClass('show')
    })
  },
  random (length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  },
  applyDrag (arr, dragResult) {
    const { removedIndex, addedIndex, payload } = dragResult
    if (removedIndex === null && addedIndex === null) return arr

    const result = [...arr]
    let itemToAdd = payload

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0]
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd)
    }

    return result
  },
  generateItems (count, creator) {
    const result = []
    for (let i = 0; i < count; i++) {
      result.push(creator(i))
    }
    return result
  }
}

export const flatpickerSetting = {
  wrap: true,
  altFormat: 'j M Y',
  altInput: true,
  dateFormat: 'Y-m-d'
}
