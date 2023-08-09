import { IconType } from "react-icons"

export type handlePageChange = (page: string) => void
// export type SideMenuClickFunction = (page: string) => React.MouseEventHandler<HTMLDivElement> | undefined 
export type SideMenuClickFunction = (page: string) => void

export type HandleCloseModal = () => void
export type HandleOpenModal = () => void


export type SingleIssue = {
    description: string,
    tag: string,
    tagIcon: IconType,
    priority: string
}