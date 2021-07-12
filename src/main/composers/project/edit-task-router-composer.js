const EditTaskRouter = require('../../../presentation/routers/project/edit-task-router')
const EditTaskUseCase = require('../../../domain/usecases/project/edit-task-usecase')
const EditTaskRepository = require('../../../infra/repositories/project/edit-task-repository')

module.exports = class EditTaskRouterComposer {
  static compose () {
    const editTaskRepository = new EditTaskRepository()
    const editTaskUseCase = new EditTaskUseCase({
      editTaskRepository,
    })
    return new EditTaskRouter({
      editTaskUseCase    
    })
  }
}
