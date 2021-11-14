import { React, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import { Card, CardContent, CardMedia, CardActions, Button } from '@mui/material'
import { NEWS_API_KEY, NEWS_API_URL } from '../../environment'

export default function Restrictions(props) {
    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() => {
        async function retrieveNews() {
            const response = await fetch(`${NEWS_API_URL}?apiKey=${NEWS_API_KEY}&q=covid&country=ca&pageSize=10`)
            const body = await response.json()
            console.log(body)
            setNewsArticles(body.articles)
        }
        retrieveNews()
    }, [])

    return (
        <Container maxWidth="sm">
            <h1 style={{ justifyItems: 'center', textAlign: 'center' }}>Recent COVID-19 News</h1>
            {newsArticles.map((data, index) => (
                <>
                    <Card sx={{ margin: '5%' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={data.urlToImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <CardActions>
                                <Button variant="contained" href={data.url}>Go to Article</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </>
            ))}
        </Container>
    )
}