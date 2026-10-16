
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, LockKeyhole } from 'lucide-react'

const secretStyles = `
.secret-room {
  position: relative;
  padding: 30px 20px;
  overflow: hidden;
}

.secret-code-box {
  position: relative;
  z-index: 2;
  width: min(100%, 430px);
  margin: 0 auto;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  color: inherit;
}

.secret-code-box h3 {
  font-size: 1.4rem;
  line-height: 1.5;
}

.secret-code-box > p {
  line-height: 1.8;
  opacity: 0.85;
}

.secret-open-button,
.secret-modal-done {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 14px 20px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #ff6397, #d9468f);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.secret-open-button:hover,
.secret-modal-done:hover {
  transform: translateY(-2px);
}

.secret-input-area {
  width: 100%;
  overflow: hidden;
}

.secret-hint {
  margin-bottom: 12px;
  line-height: 1.7;
}

.secret-input-area form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.secret-input-area input {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;
  border: 1px solid rgba(255, 120, 170, 0.5);
  border-radius: 13px;
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  text-align: center;
  font-size: 1.1rem;
  letter-spacing: 8px;
}

.secret-input-area input:focus {
  border-color: #ff6397;
  box-shadow: 0 0 15px rgba(255, 99, 151, 0.2);
}

.secret-input-area input::placeholder {
  letter-spacing: normal;
  font-size: 0.9rem;
}

.secret-error {
  margin-top: 12px;
  color: #ff6b8a !important;
  font-size: 0.9rem;
}

.secret-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: rgba(15, 5, 18, 0.8);
  backdrop-filter: blur(10px);
  overflow-y: auto;
}

.secret-modal {
  position: relative;
  box-sizing: border-box;
  width: min(100%, 540px);
  max-height: 88vh;
  overflow-y: auto;
  padding: 30px 25px;
  border: 1px solid rgba(255, 130, 180, 0.35);
  border-radius: 25px;
  background: rgba(45, 20, 40, 0.97);
  color: #fff;
  text-align: center;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
  scrollbar-width: thin;
}

.secret-modal-close {
  position: sticky;
  top: 0;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  margin: -10px -8px 0 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  cursor: pointer;
}

.secret-modal-heart {
  clear: both;
  padding-top: 12px;
  font-size: 3rem;
}

.secret-modal .eyebrow {
  margin: 15px 0;
  color: #ff9cbd;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.secret-modal h2 {
  margin-bottom: 24px;
  font-size: clamp(1.4rem, 5vw, 2rem);
  line-height: 1.5;
}

.secret-modal-message {
  text-align: left;
  line-height: 1.9;
  overflow-wrap: anywhere;
}

.secret-modal-message p {
  margin-bottom: 18px;
}

.secret-modal-message h3 {
  margin-top: 25px;
  color: #ff9cbd;
  text-align: center;
}

.secret-modal-message .secret-signature {
  margin-top: 15px;
  color: #ffb6ce;
  text-align: right;
  font-style: italic;
}

.secret-modal-done {
  width: 100%;
  margin-top: 25px;
}

@media (max-width: 480px) {
  .secret-room {
    padding: 20px 12px;
  }

  .secret-code-box {
    padding: 22px 10px;
  }

  .secret-modal {
    max-height: 85vh;
    padding: 24px 18px;
  }

  .secret-modal-message {
    font-size: 0.94rem;
  }
}
`

export default function SecretSurprise() {
  const [secretCode, setSecretCode] = useState('')
  const [showCodeInput, setShowCodeInput] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [wrongCode, setWrongCode] = useState(false)

  const checkCode = () => {
    if (secretCode.trim() === '2021') {
      setShowModal(true)
      setWrongCode(false)
      setSecretCode('')
    } else {
      setWrongCode(true)
    }
  }

  return (
    <>
      <style>{secretStyles}</style>

      <section className="secret-zone section" id="secret">
        <div className="section-heading">
          <p className="eyebrow">A Little Secret Just For You 💌</p>
          <h2>There's Something Special Waiting ✨</h2>
          <p>Some surprises are meant only for you, my love. ❤️</p>
        </div>

        <div className="secret-room glass">
          <motion.div
            className="secret-code-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart size={38} fill="#ff6397" color="#ff6397" />
            </motion.div>

            <h3>My Dear Thanga Mayileyy 🦚❤️</h3>

            <p>
              I have one more little surprise for you, maileyy.
              Are you ready to discover it? 🥹💖
            </p>

            {!showCodeInput && (
              <motion.button
                type="button"
                className="secret-open-button"
                onClick={() => {
                  setShowCodeInput(true)
                  setWrongCode(false)
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Heart size={18} />
                Open My Secret ❤️
              </motion.button>
            )}

            <AnimatePresence>
              {showCodeInput && (
                <motion.div
                  className="secret-input-area"
                  initial={{ opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="secret-hint">
                    Enter our special secret code 💕
                  </p>

                  <form
                    onSubmit={e => {
                      e.preventDefault()
                      checkCode()
                    }}
                  >
                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="Enter 4-digit code"
                      value={secretCode}
                      onChange={e => {
                        setSecretCode(
                          e.target.value.replace(/\D/g, '').slice(0, 4),
                        )
                        setWrongCode(false)
                      }}
                      aria-label="Enter secret code"
                      autoFocus
                    />

                    <motion.button
                      type="submit"
                      className="secret-open-button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <LockKeyhole size={17} />
                      Unlock My Secret ❤️
                    </motion.button>
                  </form>

                  {wrongCode && (
                    <motion.p
                      className="secret-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Wrong code, my love. Try again! 💗
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className="secret-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="secret-modal glass"
                initial={{ opacity: 0, scale: 0.75, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.35 }}
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="secret-modal-title"
              >
                <button
                  type="button"
                  className="secret-modal-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close secret"
                >
                  <X size={22} />
                </button>

                <motion.div
                  className="secret-modal-heart"
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ❤️
                </motion.div>

                <p className="eyebrow">A Secret From My Heart 💌</p>

                <h2 id="secret-modal-title">
                  My Dear Thanga Mayileyy 🦚
                </h2>

                <div className="secret-modal-message">
                  <p>En Azhagana Eruma Maaduu... ❤️</p>

                  <p>
                    Unakku mattum therinja indha chinna secret,
                    en manasula irukkura azhagana feelings-oda
                    oru chinna part, maileyy. 💖
                  </p>

                  <p>
                    Ni tha ennoda paithiyam, cloww, loosu , pattu, vairam, eruma, pisasu, kirukku, 
                    my kulllachiiiii............
                  </p>

                  <p>
                    Happy Birthday, My Dear Thanga pulla! 🎂🦚
                    Un life full-ah happiness, love, peace,
                    success ellame nirainjirukkanum.
                  </p>

                  <p>
                    Eppavume ippadiye azhaga sirichukitte iru,
                    loosuuu. Un sirippu eppavume kuraiya koodathu.
                    Un dreams ellame nijamaaganum. ❤️
                  </p>

                  <h3>Forever With You ❤️♾️</h3>

                  <p className="secret-signature">
                    Unna romba romba nesikkuren maileyyy,
                    <br />
                    Un Santhosh 💖
                  </p>
                </div>

                <motion.button
                  type="button"
                  className="secret-modal-done"
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Close With Love 💕
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}
