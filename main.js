const createChassis = () => {
  const newChassisObject = {}
  
  return newChassisObject
}

const addBody = (chassisObject) => {
  chassisObject.body = "Fever"

  return chassisObject
}

const addWheels = (chassisObject) => {
  chassisObject.wheels = 4

  return chassisObject
}

const addEngine = (chassisObject) => {
  chassisObject.engine = "4.8L"

  return chassisObject
}

const addSteeringWheel = (chassisObject) => {
  chassisObject.steeringWheel = "Tilting Steering Wheel"

  return chassisObject
}

const addDriveTrain = (chassisObject) => {
  chassisObject.driveTrain = "Two wheel drive"

  return chassisObject
}


const finalCar = () => {
  const chassis = createChassis()
  const chassisBody = addBody(chassis)
  const chassisWheels = addWheels(chassisBody)
  const chassisEngine = addEngine(chassisWheels)
  const chassisSteeringWheel = addSteeringWheel(chassisEngine)
  const chassisDriveTrain = addDriveTrain(chassisSteeringWheel)

  return chassisDriveTrain
}

const car1 = finalCar()

console.log(car1)