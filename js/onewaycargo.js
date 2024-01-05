let counter = (id, num, is_float = false) => {
    $({ countNum: $(id).html() }).animate(
        { countNum: num },
        {
            duration: num < 100 ? 500 : 1000,
            easing: 'swing',
            step: function () {
                $(id).html(Math.floor(this.countNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
            },
            complete: function () {
              let final_number = is_float 
                ? this.countNum.toFixed(2)
                : this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
              $(id).html(final_number) 
            },
        }
    )
}

let showMobileMenu = () => {
  $('#mobileMenu').toggleClass('hidden')
  $('#blackOverlayMobile').toggleClass('hidden')
}

$('#whatsappButton').hover(() => {
  $('#whastappContactanos').toggleClass('opacity-0')
})

$('#whatsappButton').click(() => {
fbq('track', 'Contact');
})

var counting_home = false;