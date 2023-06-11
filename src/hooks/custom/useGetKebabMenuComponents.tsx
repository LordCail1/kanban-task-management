import { ComponentType } from "react";
import KebabMenu from "../../components/KebabMenu/KebabMenu";


const useGetKebabMenuComponents = (component: KebabMenuComponents): ComponentType<any> => {
    switch(component) {
        case "KebabMenu":
            return KebabMenu
    }
}

export default useGetKebabMenuComponents