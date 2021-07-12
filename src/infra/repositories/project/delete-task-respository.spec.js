const MongoHelper = require('../../helpers/mongo-helper')
const DeleteTaskRepository = require('./delete-task-repository')
let projectModel

const makeSut = () => {
  return new DeleteTaskRepository()
}

describe('DeleteTask Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
    projectModel = await MongoHelper.getCollection('projects')
  })

  beforeEach(async () => {
    await projectModel.deleteMany()
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should delete the task if correct params are provided', async () => {
    const sut = makeSut()
    const userId = '60ea0e3d8e7c7100129b8e97'
    const project = await projectModel.insertOne({
      name: 'any_name',
      user_id: MongoHelper.getObjectId(userId),
      tasks: [
        {
          _id: MongoHelper.getObjectId(),
          description: 'old_description',
          created_at: new Date(Date.now() - 30*60000),
          completed_at: null
        }
      ]
    })
    const projectId = project.ops[0]._id
    const taskId = project.ops[0].tasks[0]._id
    const result = await sut.delete(projectId, taskId, userId)
    expect(result).toBeTruthy()
  })
})
