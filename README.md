## symfony-project

A project to become familiar with a Symfony/PHP backend and a playground to practice
things I am learning at Wellcome Trust.

**run server:**  
`php bin/console server:run`

**Symfony routes:**

basic route example:
```
class Hello extends Controller
{
    /**
     * @Route("/hello")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('hello.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }
}
```

Coming from Javascript and Node this line is unusual. This line isn't commented out, it's where you set the route path:

```
/**
 * @Route("/hello")
 */
```
