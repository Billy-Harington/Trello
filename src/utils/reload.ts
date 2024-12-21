import { ReloadProps } from "./types"


export function reload({ arr, commponent, places }: ReloadProps) {
    places.forEach(el => el.innerHTML = "")

    for (const item of arr) {
        const elem: HTMLElement = commponent(item)

        places[item.status -1].append(elem)
    }
}

