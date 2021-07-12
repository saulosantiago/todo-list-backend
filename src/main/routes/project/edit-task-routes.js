const { protectedAdapt } = require('../../adapters/express-router-adapter')
const EditTaskRouterComposer = require('../../composers/project/edit-task-router-composer')

module.exports = router => {
  router.put('/projects/:projectId/tasks/:taskId', protectedAdapt(EditTaskRouterComposer.compose()))
}
