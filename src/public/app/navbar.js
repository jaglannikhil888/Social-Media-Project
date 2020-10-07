let navlinks=$('.navbar-nav .nav-link')

navlinks.click((ev)=>{
    //console.log($(ev.target).attr('data-component'))
    let componentUrl=`/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})