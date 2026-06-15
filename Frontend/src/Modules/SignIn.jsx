import style from '../css/signIn.module.css'

export default function SignIn (){
    return(
        <div className={style.page}>
            <form className={style.card} action="#">
                <h3>Sign in or sign up</h3>

                <div className={style.socialRow}>
                    <button type="button" className={style.socialButton}>Google</button>
                    <button type="button" className={style.socialButton}>Facebook</button>
                </div>

                <div className={style.fieldGroup}>
                    <label>
                        Email
                        <input type="email" placeholder="you@example.com" />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Enter your password" />
                    </label>
                    <button type="submit" className={style.primaryButton}>Sign in</button>
                </div>

                <div className={style.footerRow}>
                    <span>Need an account?</span>
                    <button type="button" className={style.secondaryButton}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}