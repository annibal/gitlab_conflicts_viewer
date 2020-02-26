import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { add, extractStatePortion, extractCount, loadCount } from '../Component/ComponentActions.js'
import { extractXState, map_XStates2TranslationKeys } from '../XState/XStateActions'
import R from 'ramda'
// import OtherComponent from '../Other/Other.js

export default function Component({ children, title }) {

    useEffect(() => loadCount(), []);
    const dispatch = useDispatch();
    const count = useSelector(R.pipe(extractStatePortion, extractCount));
    const xState = useSelector(R.pipe(extractStatePortion, extractXState, map_XStates2TranslationKeys));
    const { t } = useTranslation();

    return (
      <div>
        <strong>{title}</strong>
        <span>{t("misc.lorem")}</span>
        <span>
          {t("xstates.currentStatus")}: {t(xState)}
        </span>
        <button onClick={() => dispatch(add())}>{count}</button>
        {children}
      </div>
    );
}

Component.propTypes = {
    title: PropTypes.string
}