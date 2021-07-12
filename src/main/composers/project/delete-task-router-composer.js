const DeleteTaskRouter = require('../../../presentation/routers/project/delete-task-router')
const DeleteTaskUseCase = require('../../../domain/usecases/project/delete-task-usecase')
const DeleteTaskRepository = require('../../../infra/repositories/project/delete-task-repository')

module.exports = class DeleteTaskRouterComposer {
  static compose () {
    const deleteTaskRepository = new DeleteTaskRepository()
    const deleteTaskUseCase = new DeleteTaskUseCase({
      deleteTaskRepository,
    })
    return new DeleteTaskRouter({
      deleteTaskUseCase    
    })
  }
}
