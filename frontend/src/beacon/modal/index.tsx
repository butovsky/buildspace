import { Button } from "../button"
import { Card } from "../card"
import { ModalProps } from "./types"

export const Modal: React.FC<ModalProps> = (props) => {
    return (
        props.isOpen ?
            <div className={`${props.className} fixed inset-0 flex items-center justify-center backdrop-blur-md`} onClick={() => props.close()}>
                <div onClick={(e) => e.stopPropagation()}>
                    <Card className="bg-black/30">
                        <div className="flex justify-end w-full">
                            <Button className='' width={30} onClick={() => props.close()}>X</Button>
                        </div>
                        {props.children}
                    </Card>
                </div>
            </div>
        : null
    )
}