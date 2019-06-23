document.querySelectorAll('a').forEach(anchor =>

    anchor.onclick = () => {


        html.setAttribute('class', anchor.id)

        settings.put({ setting: 'theme', value: anchor.id })

        return false
    }
)

