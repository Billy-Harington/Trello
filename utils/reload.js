function reload(arr,commponent,place) {
    place.innerHTML = ""

    for (const item of arr) {
        const elem = commponent(item)

        place.append(elem)
    }
}