export type ReloadProps = {
    arr: Array<any>
    commponent:(item: TaskType) => HTMLElement
    places:NodeListOf<HTMLElement>
}

enum Status {
    one = 1,
    two = 2,
    three = 3
}

export type TaskType = {
    id: string
    title: string
    description: string
    status:Status.one
    deadline: Date
    createdAt: Date
    updatedAt: Date
}