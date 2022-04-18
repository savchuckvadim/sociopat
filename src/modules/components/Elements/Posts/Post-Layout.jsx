import Icon from '../Icon';
import style from './Post-Layout.module.css';
import dislike from '../../../../assets/posts/dislike.svg';
import repost from '../../../../assets/posts/repost.svg';
import eye from '../../../../assets/posts/eye.svg';

let img = `https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80`
let postsImg = `https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`

const PostLayout = (props) => {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.user__container}>
                    <Icon img={img} />
                    <div className={style.user__container}></div>
                </div>
                <div className={style.functions}></div>
            </div>
            <div className={style.body}>
                <div className={style.message__container}>
                    <p className={style.message}>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный количественный рост и сфера нашей активности способствует подготовке и реализации глубокомысленных рассуждений. Каждый из нас понимает очевидную вещь: консультация с широким активом напрямую зависит от как самодостаточных, так и внешне зависимых концептуальных решений. Как принято считать, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы! С другой стороны, сложившаяся структура организации предполагает независимые способы реализации соответствующих условий активизации.</p>
                </div>
                <div className={style.img__container}>
                    <img className={style.post__img} src={props.postsImg} alt="postsImg" />
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.actions__container}>
                    <img className={style.action} src={dislike} alt="dislike" />
                    <img className={style.action} src={repost} alt="repost" />
                </div>
                <div className={style.views}>
                    <img className={style.icon} src={eye} alt="eye" />
                    <p className={style.quantity}>420</p>
                </div>
            </div>
        </div>
    )
}

export default PostLayout