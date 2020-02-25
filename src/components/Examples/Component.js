import React from 'react';
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
// import OtherComponent from '../Other/Other.js
// import { action, extract } from '../Component/ComponentActions.js'

export default function Component({ prop }) {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const { t } = useTranslation();

    return (
        <div>
            <span>{t("misc.lorem")}</span>
            <p>{prop}</p>
        </div>
    )
}

Component.propTypes = {
    prop: PropTypes.any,
}