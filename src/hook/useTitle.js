import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - BD News`;
    }, [title])
}

export default useTitle;