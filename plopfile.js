var path = require('path')

module.exports = function (plop) {
	plop.setGenerator('component', {
		description: "Create a component",
		prompts: [{
			type: 'input',
			name: 'name',
			message: "What is your component name?",
		}],
		actions: (data) => {
      return [
        {
          type: 'add',
          path: path.join(__dirname, 'src/{{pascalCase name}}/{{pascalCase name}}.tsx'),
          templateFile: path.join(__dirname, 'plop-templates/Component/Component.tsx.hbs')
        },
        {
          type: 'add',
          path: path.join(__dirname, 'src/{{pascalCase name}}/index.ts'),
          templateFile: path.join(__dirname, 'plop-templates/Component/index.ts.hbs')
        },
        {
          type: 'add',
          path: path.join(__dirname, 'stories/{{pascalCase name}}.stories.tsx'),
          templateFile: path.join(__dirname, 'plop-templates/Component/stories.tsx.hbs')
        },
        {
          type: 'append',
          path: path.join(__dirname, 'src/index.tsx'),
          templateFile: path.join(__dirname, 'plop-templates/Component/src/index.tsx.hbs')
        },
      ]
    }
  });
};