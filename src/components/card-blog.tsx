import { Card } from "@chakra-ui/react"

type BlogProps ={
    title: string,
    subtitle?: string,
    description: string
}

export const CardBlog: React.FC<BlogProps> = () => {
    return(
        <Card></Card>
    )
}