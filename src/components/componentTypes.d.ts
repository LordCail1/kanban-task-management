

type Popup = {
    active: boolean
    content: React.ComponentType<any> | undefined
}

type Active = {
    active: boolean
}

type UserInputTitle = {
    title: string
}


/**
 * To find corresponding component with given string
 */

type HOCPopupComponent = {
    [key: string]: React.ComponentType<any>
}


