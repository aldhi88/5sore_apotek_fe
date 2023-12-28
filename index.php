<?php
if(!isset($_REQUEST['page'])){
    header('location:?page=home');
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <!-- bootstrap -->
        <link rel="stylesheet" href="assets/lib/bootstrap-4.6.2-dist/css/bootstrap.min.css" />

        <!-- css external -->
        <link rel="stylesheet" href="assets/css/index.css" />
        <script src="env.js" crossorigin="anonymous"></script>
        <title>Apotek | Home</title>
    </head>

    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="container">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link text-white-50" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>

        <main>
            <?php include $_REQUEST['page'].".php"; ?>
        </main>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
        <script src="script/<?= $_REQUEST['page'].".js" ?>"></script>
    </body>
</html>
