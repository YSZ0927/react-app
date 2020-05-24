import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux'
import { RouterComponentProps } from 'react-router-dom'
import ProductList from '@/components/ProductList'
import mapDispatchToProps from '@/store/actions/home'
import { HomeState, RootState } from '@/typings'
import TypeSession from './components/TypeSession'
import BannerSlider from './components/BannerSlider'
import ActiveArea from './components/ActiveArea'
import './index.less'

type Props = PropsWithChildren<RouterComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>;

function Home (props: Props) {
    return (
        <div className="home">
            <BannerSlider
                bannerList={props.bannerList}
                getBanner={props.getBanner}>
            </BannerSlider>
            <TypeSession
                sessionList={props.sessionList}
                getTypeSessions={props.getTypeSessions}>
            </TypeSession>
            <ProductList
                goodsList={props.goodsList}
                getGoodsList={props.getGoodsList}>
            </ProductList>
            <ActiveArea sessionList={props.sessionList}
                getTypeSessions={props.getTypeSessions}>></ActiveArea>
        </div>
    );
}

const mapStateToProps = (state: RootState):HomeState => state.home
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
