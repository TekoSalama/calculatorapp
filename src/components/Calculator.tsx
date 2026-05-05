import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addition,
  subtraction,
  multiplication,
  division,
} from "../features/calculator/calcSlice";
import type { RootState } from "../app/store";

function Calculator() {
  const resultState = useSelector((state: RootState) => state.calc.result);
  const dispatch = useDispatch();
  const [firstNumber, setFristNumber] = useState("");
  const [secoundNumber, setsecoundNumber] = useState("");
  // const [result, setResult] = useState<number | null>(null);

  // - handlerFunctions -
  useEffect(() => {
    console.log(resultState);
  }, [resultState]);
  function handleAddition() {
    dispatch(
      addition({
        firstNumber: Number(firstNumber),
        secoundNumber: Number(secoundNumber),
      }),
    );
  }

  function handleSubtraction() {
    dispatch(
      subtraction({
        firstNumber: Number(firstNumber),
        secoundNumber: Number(secoundNumber),
      }),
    );
  }

  function handleMultiplication() {
    dispatch(
      multiplication({
        firstNumber: Number(firstNumber),
        secoundNumber: Number(secoundNumber),
      }),
    );
  }

  function handleDivision() {
    dispatch(
      division({
        firstNumber: Number(firstNumber),
        secoundNumber: Number(secoundNumber),
      }),
    );
  }

  // <=== handlerFunctions ===>>

  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        <section className="flex mt-15 fixed h-[50px] w-[300px] items-center justify-center rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50">
          <div className="flex justify-between items-center  p-10 text-white ">
            <p title="home" aria-label="home">
              <HomeIcon
                className="hover:text-blue-300"
                sx={{ marginRight: "30px", cursor: "pointer" }}
              />
            </p>
            <p title="Info" aria-label="Info">
              <InfoIcon
                className="hover:text-blue-300"
                sx={{ marginLift: "30px", cursor: "pointer" }}
              />
            </p>
          </div>
        </section>
      </div>
      <section id="center">
        <h1 className="text-white p-3 rounded-t-lg rounded-br-lg  bg-cyan-500 shadow-lg shadow-cyan-500/50 ">
          Calculator App
        </h1>

        {/* section input */}

        <section id="next-steps">
          <div className="flex flex-col items-center" id="docs">
            <CalculateIcon
              sx={{ margin: "10px" }}
              className="text-white rounded-sm bg-cyan-500 shadow-lg shadow-cyan-500/50 "
            />
            <label className="flex mb-5 mt-5 " htmlFor="firstNumber">
              First Number
            </label>
            <input
              id="firstNumber"
              value={firstNumber}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setFristNumber(value);
                }
              }}
              className="border"
              type="number"
            />
          </div>
          <div className="flex flex-col items-center" id="">
            <CalculateIcon
              sx={{ margin: "10px" }}
              className="text-white rounded-sm bg-cyan-500 shadow-lg shadow-cyan-500/50 "
            />
            <label className="flex mb-5 mt-5 " htmlFor="secoundNumber">
              Secound Number
            </label>
            <input
              id="secoundNumber"
              value={secoundNumber}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setsecoundNumber(value);
                }
              }}
              className="border"
              type="number"
            />
          </div>
        </section>
        <div>
          <h1>Get started</h1>
        </div>

        {/* section Buttons */}

        <div className="flex gap-10 text-4xl">
          <button
            onClick={handleAddition}
            type="button"
            className="text-white p-2 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 cursor-pointer hover:text-black"
          >
            +
          </button>

          <button
            onClick={handleSubtraction}
            type="button"
            className="text-white p-2 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 cursor-pointer hover:text-black"
          >
            -
          </button>

          <button
            onClick={handleMultiplication}
            type="button"
            className="text-white p-2 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 cursor-pointer hover:text-black"
          >
            *
          </button>

          <button
            onClick={handleDivision}
            type="button"
            className="text-white p-2 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 cursor-pointer hover:text-black"
          >
            /
          </button>
        </div>

        {/*====== section Buttons ======*/}

        {/* section result */}
        <section className="flex justify-between m-5 items-center  p-10 text-white ">
          <p
            style={{ marginRight: "10px" }}
            className="text-white p-3 m-10 rounded-tl-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 "
          >
            result
          </p>
          <p className="text-white p-3 m-10 rounded-tr-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 ">
            {resultState ? resultState : "0"}
          </p>
        </section>
      </section>

      {/*========== section result ====== */}
      <div className="ticks"></div>

      <div className="ticks"></div>
      <hr className="text-cyan-500 " />
      <div className="flex justify-between items-center ">
        <section
          className="flex justify-center items-center  md: text-[15px] "
          id="spacer"
        >
          <p>copyright Teko</p>
        </section>
        <section
          className="flex justify-center items-center sm: flex-col"
          id="spacer"
        >
          <p className="flex items-center text-white rounded-t-lg rounded-br-lg  bg-cyan-500 shadow-lg shadow-cyan-500/50">
            Calculator App
          </p>
        </section>
        <section className="flex justify-center items-center " id="spacer">
          <div className="flex items-center justify-between m-10  text-white">
            <p title="home" aria-label="home">
              <HomeIcon
                className="hover:text-blue-300"
                sx={{ marginRight: "30px", cursor: "pointer" }}
              />
            </p>
            <p title="Info" aria-label="Info">
              <InfoIcon
                className="hover:text-blue-300"
                sx={{ marginLift: "30px", cursor: "pointer" }}
              />
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Calculator;
