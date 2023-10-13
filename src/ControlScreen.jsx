import React, { useState, useEffect } from 'react';
import './ControlScreen.css'; // Import your CSS file
import alarmSound from './assets/alarm.mp3'; // Import an alarm sound (replace with the actual path)

function ControlScreen() {
  const [showHeightAdjust, setShowHeightAdjust] = useState(false);
  const [tableHeight, setTableHeight] = useState(100);
  const [popupVisible, setPopupVisible] = useState({
    speakers: false,
    screen: false,
    doNotDisturb: false,
    hdmiDock: false,
    chargingStatus: false,
    usbConnection: false,
    wireless: false,
    clockTimer: false,
    workBreakMode: false,
    ambientLighting: false,
  });
  const [ambientLightingActive, setAmbientLightingActive] = useState(false); // New state variable for ambient lighting
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes in seconds
  const [isPomodoroActive, setIsPomodoroActive] = useState(false);
  const [isPomodoroVisible, setIsPomodoroVisible] = useState(false); // Control Pomodoro timer visibility
  const [customPomodoroTime, setCustomPomodoroTime] = useState(25); // Custom Pomodoro time in minutes
  const [isCustomTimeVisible, setIsCustomTimeVisible] = useState(false); // Control custom timer input visibility

  // Audio alarm for the Pomodoro timer
  const alarmAudio = new Audio(alarmSound);

  // Function to start the Pomodoro timer
  function startPomodoroTimer() {
    setIsPomodoroActive(true);
    setPomodoroTime(customPomodoroTime * 60); // Set the timer to custom time
    setIsPomodoroVisible(true); // Show the Pomodoro timer
    setIsCustomTimeVisible(false); // Hide the custom time input
  
    const pomodoroInterval = setInterval(() => {
      setPomodoroTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(pomodoroInterval);
          setIsPomodoroActive(false);
          alarmAudio.play(); // Play the alarm sound
          audioPlayed = true;
          setIsPomodoroVisible(false); // Hide the Pomodoro timer
          if (audioPlayed = true){
            alert('Pomodoro session is over! Take a break.');
          }
          return 0; // Ensure the timer is set to 0
        }
      });
    }, 1000);
  }  

  // Function to handle the "WORK BREAK MODE" button click
  function handleWorkBreakModeClick() {
    if (!isPomodoroActive) {
      if (!isCustomTimeVisible) {
        // Show the custom time input if not visible
        setIsCustomTimeVisible(true);
      } else {
        if (customPomodoroTime > 0) {
          startPomodoroTimer();
        } else {
          alert('Please enter a valid Pomodoro time.');
        }
      }
    } else {
      alert('Finish your current Pomodoro session before starting a new one.');
    }
  }

  // Function to handle the "DO NOT DISTURB" button click
  function handleDoNotDisturbClick() {
    // Toggle the visibility of the Do Not Disturb popup
    setPopupVisible((prevPopupVisible) => ({
      ...prevPopupVisible,
      doNotDisturb: !prevPopupVisible.doNotDisturb,
    }));

    // Automatically hide the popup after 5 seconds
    setTimeout(() => {
      setPopupVisible((prevPopupVisible) => ({
        ...prevPopupVisible,
        doNotDisturb: false,
      }));
    }, 5000);
  }

  // Function to handle the "HEIGHT ADJUST" button click
  function handleHeightAdjustClick() {
    setShowHeightAdjust((prevShowHeightAdjust) => !prevShowHeightAdjust); // Toggle the visibility
  }

  // Function to handle button clicks with popups
  function handleButtonClickWithPopup(buttonName) {
    // Toggle the visibility of the clicked button's popup
    setPopupVisible((prevPopupVisible) => ({
      ...prevPopupVisible,
      [buttonName]: !prevPopupVisible[buttonName],
    }));

    // Automatically hide the popup after 5 seconds
    setTimeout(() => {
      setPopupVisible((prevPopupVisible) => ({
        ...prevPopupVisible,
        [buttonName]: false,
      }));
    }, 5000);
  }

  // Function to handle table height adjustment
  function handleTableHeightChange(event) {
    const newHeight = event.target.value;
    setTableHeight(newHeight);
  }

  // Function to handle custom Pomodoro time change
  function handleCustomPomodoroTimeChange(event) {
    const newTime = parseInt(event.target.value, 10);
    setCustomPomodoroTime(newTime);
  }

  // Function to toggle ambient lighting
  function toggleAmbientLighting() {
    setAmbientLightingActive((prevAmbientLightingActive) => !prevAmbientLightingActive);
  }

  // Fetch weather data and update it in the state
  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&units=metric&apikey=GZLOTqNXPck3bTSlf0exlKeUqf9U9QTo', options)
      .then((response) => response.json())
      .then((data) => {
        // Assuming that 'temperature' and 'weatherCode' are relevant data points
        const temperature = data.data.temperature.value;
        const weatherCode = data.data.weatherCode.value;
        setWeather({ temperature, weatherCode });
      })
      .catch((err) => console.error(err));
  }, []);

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`tablet ${ambientLightingActive ? 'ambient-lighting-active' : ''}`}>
      <div className="tablet-frame">
        <div className="header">
          <h2>Weather</h2>
          <div id="weather">
            {/* API not working!! NEED TO FIX! */}
            {/* <p>Current Weather: {weather ? `${weather.temperature}°C, Code: ${weather.weatherCode}` : 'Loading...'}</p> */}
            <p>Current Weather: 10°C, Windy</p>
          </div>
          <div id="time">
            <p>Current Time: {currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
        <div className="content">
          <div className="left-panel">
          <div className="buttons">
              <div className="button">
                <button
                  className={`btn ${isPomodoroActive ? 'active-button' : ''}`}
                  onClick={() => handleButtonClickWithPopup('speakers')}
                >
                  <i className="fas fa-volume-up"></i>
                  SPEAKERS
                </button>
                {popupVisible.speakers && (
                  <div className="popup">
                    <span className="popuptext" id="speakersPopup">
                      This is the Speakers Popup.
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className="btn"
                  onClick={() => handleButtonClickWithPopup('screen')}
                >
                  <i className="fas fa-desktop"></i>
                  SCREEN
                </button>
                {popupVisible.screen && (
                  <div className="popup">
                    <span className="popuptext" id="screenPopup">
                      This is the Screen Popup.
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className="btn"
                  onClick={handleDoNotDisturbClick}
                >
                  <i className="fas fa-moon"></i>
                  DO NOT DISTURB
                </button>
                {popupVisible.doNotDisturb && (
                  <div className="popup">
                    <span className="popuptext" id="doNotDisturbPopup">
                      Do Not Disturb Mode Enabled. Click again to disable.
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className="btn"
                  onClick={() => handleButtonClickWithPopup('hdmiDock')}
                >
                  <i className="fas fa-hdmi"></i>
                  HDMI DOCK
                </button>
                {popupVisible.hdmiDock && (
                  <div className="popup">
                    <span className="popuptext" id="hdmiDockPopup">
                      This is the HDMI Dock Popup.
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className="btn"
                  onClick={() => handleButtonClickWithPopup('chargingStatus')}
                >
                  <i className="fas fa-battery-full"></i>
                  CHARGING STATUS
                </button>
                {popupVisible.chargingStatus && (
                  <div className="popup">
                    <span className="popuptext" id="chargingStatusPopup">
                      This is the Charging Status Popup.
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className="btn"
                  onClick={() => handleButtonClickWithPopup('usbConnection')}
                >
                  <i className="fas fa-usb"></i>
                  USB CONNECTION
                </button>
                {popupVisible.usbConnection && (
                  <div className="popup">
                    <span className="popuptext" id="usbConnectionPopup">
                      This is the USB Connection Popup.
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className="btn"
                  onClick={() => handleButtonClickWithPopup('wireless')}
                >
                  <i className="fas fa-wifi"></i>
                  WIRELESS
                </button>
                {popupVisible.wireless && (
                  <div className="popup">
                    <span className="popuptext" id="wirelessPopup">
                      This is the Wireless Popup.
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className="btn"
                  onClick={() => handleButtonClickWithPopup('clockTimer')}
                >
                  <i className="fas fa-clock"></i>
                  CLOCK TIMER
                </button>
                {popupVisible.clockTimer && (
                  <div className="popup">
                    <span className="popuptext" id="clockTimerPopup">
                      {isPomodoroActive
                        ? `Pomodoro Timer: ${Math.floor(pomodoroTime / 60)}:${
                            pomodoroTime % 60 < 10
                              ? '0' + (pomodoroTime % 60)
                              : pomodoroTime % 60
                          }`
                        : 'This is the Clock Timer Popup.'}
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className={`btn ${isPomodoroActive ? 'active-button' : ''}`}
                  onClick={handleWorkBreakModeClick}
                >
                  <i className="fas fa-hourglass-start"></i>
                  WORK-BREAK MODE
                </button>
                {popupVisible.workBreakMode && (
                  <div className="popup">
                    <span className="popuptext" id="workBreakModePopup">
                      {isPomodoroActive
                        ? `Pomodoro Timer: ${Math.floor(pomodoroTime / 60)}:${
                            pomodoroTime % 60 < 10
                              ? '0' + (pomodoroTime % 60)
                              : pomodoroTime % 60
                          }`
                        : 'This is the Work Break Mode Popup.'}
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button
                  className={`btn ${ambientLightingActive ? 'active-button' : ''}`}
                  onClick={() => {
                    toggleAmbientLighting();
                    handleButtonClickWithPopup('ambientLighting');
                  }}
                >
                  <i className="fas fa-sun"></i>
                  AMBIENT LIGHTING
                </button>
                {popupVisible.ambientLighting && (
                  <div className="popup">
                    <span className="popuptext" id="ambientLightingPopup">
                      This is the Ambient Lighting Popup.
                    </span>
                  </div>
                )}
              </div>
              <div className="button">
                <button className="btn" onClick={handleHeightAdjustClick}>
                  <i className="fas fa-arrows-alt-v"></i>
                  HEIGHT ADJUSTMENT
                </button>
                {showHeightAdjust && (
                  <div className="popup">
                    <div className="range-slider">
                      <input
                        className="range-slider__range"
                        type="range"
                        value={tableHeight}
                        min="0"
                        max="100"
                        onChange={handleTableHeightChange}
                      />
                      <span className="range-slider__value">{tableHeight}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {isCustomTimeVisible && (
            <div className="custom-time-input">
              <input
                type="number"
                placeholder="Enter Pomodoro time (minutes)"
                value={customPomodoroTime}
                onChange={handleCustomPomodoroTimeChange}
              />
              <button
                className="btn custom-timer-btn"
                onClick={handleWorkBreakModeClick}
              >
                Start Custom Pomodoro Timer
              </button>
            </div>
          )}
                    {isPomodoroVisible && (
            <div className="pomodoro-timer">
              <p>
                Pomodoro Timer: {Math.floor(pomodoroTime / 60)}:
                {pomodoroTime % 60 < 10 ? '0' + (pomodoroTime % 60) : pomodoroTime % 60}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ControlScreen;