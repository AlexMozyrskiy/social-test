import React from "react";

const InputWithValidate = ({input, meta, ...props}) => {   // деструктуризируем полученные данные из пропсов
    return ( <div className={ meta.error && meta.touched ? "profile-page__textarea" : ""}>      {/* если ошибка добавим класс ошибки */}
                <input {...input} {...props} />              {/* передаем Field'у вызывавшему этот компонент нужные ему данные */}
                { meta.error && meta.touched && <span className="profile-page__error-text">{ meta.error }</span> } {/* если ошибка добавим сообщение ошибки */}
            </div>
    );
}

export default InputWithValidate;