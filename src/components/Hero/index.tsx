import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as PostsActions } from '../../store/ducks/posts'
import { ApplicationState } from '../../store'

const Hero = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector((state: ApplicationState) => state)
    console.log(posts.data)

    useEffect(() => {
        dispatch(PostsActions.loadRequest())
    }, [dispatch])

    return (
        <div
            style={{ width: '100%', height: '300px', border: '1px solid blue' }}
        ></div>
    )
}

export default Hero
