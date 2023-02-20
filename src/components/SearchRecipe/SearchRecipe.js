import { useRef } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../Hooks/useInput";
const SearchRecipe = () => {

    const history = useHistory();

    const {
        value: enteredSearchValue,
        hasError: searchHasError,
        valueChangedHandler: searchChangedHandler,
        inputBlurHandler: searchBlurHandler,
        isValid: enteredSearchValueIsValid,
        reset: resetSearchValue
    } = useInput(value => value.trim() !== '');

    const searchControlRef = useRef('');

    let formIsValid = false;
    if (enteredSearchValueIsValid ) {
        formIsValid = true
    }

    const searchHandler = (e) => {
        e.preventDefault();
        searchControlRef.current.blur();
        if(!formIsValid) {
            console.log("form is invalidated")
            return;
        } 
        resetSearchValue();
        history.push(`/recipes/${searchControlRef.current.value}`)

    }

    return (
        <div className="listing-search box-shadow padding-30px margin-bottom-30px">
            <form className="row no-gutters" onSubmit={searchHandler}>
                <div className="col-md-12">
                    <div className="keywords">
                        <input 
                            className={`${searchHasError ? 'inValid' : ''} listing-form first border-radius-10 margin-bottom-10px`}
                            type="text" 
                            value={enteredSearchValue}
                            ref={searchControlRef}
                            placeholder="Enter recipe name" 
                            onChange={searchChangedHandler}
                            onBlur={searchBlurHandler}
                        />
                            
                    </div>
                </div>
                
                <div className="col-md-12">
                    <button className="listing-bottom border-radius-10 background-second-color box-shadow" type="submit" disabled={!formIsValid}>Search Now</button>
                </div>
            </form>
        </div>
    )
}

export default SearchRecipe;