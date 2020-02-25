import React from 'react';
import PropTypes from 'prop-types'
import { useSelector, useDispatch  } from 'react-redux'
import { useTranslation } from 'react-i18next';

export default function Filter({prop}) {

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

Filter.propTypes = {
    prop: PropTypes.any,
}