import React from "react";

const MainFormControl = ({meta, input, ...props}) => {   // деструктуризируем полученные данные из пропсов
    return ( <div className={ meta.error && meta.touched ? "profile-page__textarea" : ""}>      {/* если ошибка добавим класс ошибки */}
                { props.children }              {/* отображаем нудный тег(input или textarea) */}
                { meta.error && meta.touched && <span className="profile-page__error-text">{ meta.error }</span> } {/* если ошибка добавим сообщение ошибки */}
            </div>
    );
}

export default MainFormControl;