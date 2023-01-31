import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./vote.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const VoteModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const backgroundStyle = {
    width: "100%",
    height: "500px",
    background: `linear-gradient(0deg,#29ae65b2,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderBottomRightRadius: "10px",
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.model_container}>
          <div className={styles.container_info}>
            <div style={backgroundStyle}></div>
            <div className={styles.bio}>
              <div className={styles.divider}>
                <label for="">Name</label>
                <span>Fahia Abdi</span>
              </div>
              <div className={styles.divider}>
                <label for="">State</label>
                <span>Jubaland</span>
              </div>
              <div className={styles.divider}>
                <label for="">Background study</label>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque nemo perferendis quidem architecto officiis aperiam odio
                  nesciunt corporis voluptatum quae? Quisquam sequi quas
                  accusantium eveniet illo minima magni facilis rerum?
                </span>
              </div>
              <div className={styles.divider}>
                <label for="">Employment</label>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque nemo perferendis quidem architecto officiis aperiam odio
                  nesciunt corporis voluptatum quae? Quisquam sequi quas
                  accusantium eveniet illo minima magni facilis rerum?
                </span>
              </div>
            </div>
          </div>
          <div className={styles.vote_container}>
            <div className={styles.vote_count}>
              <span>Purchase Votes</span>
              <div className={styles.vote_controls}>
                <button type="button">
                  <AiOutlineMinus className={styles.icon} />
                </button>
                <span>50</span>
                <button type="button">
                  <AiOutlinePlus className={styles.icon} />
                </button>
              </div>
            </div>
            <form>
              <span className="">Pay with Evc, Zaad and Sahal</span>
              <input
                type="number"
                className={styles.form_control}
                placeholder="Enter your number"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VoteModal;
