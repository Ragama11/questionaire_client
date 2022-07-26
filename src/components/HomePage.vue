<template>
  <!--Main Navigation-->
  <header>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>My Account</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple active"
          >
            <i class="fas fa-chart-area fa-fw me-3"></i><span>Quizes</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-lock fa-fw me-3"></i><span>Deposit</span></a
          >
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-chart-line fa-fw me-3"></i
            ><span>Withdraw</span></a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <i class="fas fa-chart-pie fa-fw me-3"></i><span>Statements</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Logout</span></a
          >
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <!-- Navbar -->
    <nav
      id="main-navbar"
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          color="#CEC6C5"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Brand -->
        <a class="navbar-brand" href="#">
          <h1 style="font-size: 2vw">Questionaire!</h1>

          <!-- <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="25"
          alt="MDB Logo"
          loading="lazy"
        /> -->
        </a>
        <!-- Search form -->
        <!-- <form class="d-none d-md-flex input-group w-auto my-auto">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder='Search (ctrl + "/" to focus)'
          style="min-width: 225px;"
        />
        <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
      </form> -->

        <!-- Right links -->
        <ul class="navbar-nav ms-auto d-flex flex-row">
          <!-- Notification dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger"
                >1</span
              >
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">Some news</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Another news</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>

          <!-- Icon -->
          <li class="nav-item">
            <a class="nav-link me-3 me-lg-0" href="#">
              <i class="fas fa-fill-drip"></i>
            </a>
          </li>
          <!-- Icon -->
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#">
              <i class="fab fa-github"></i>
            </a>
          </li>

          <!-- Icon dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="flag-united-kingdom flag m-0"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-united-kingdom flag"></i>English
                  <i class="fa fa-check text-success ms-2"></i
                ></a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-poland flag"></i>Polski</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-china flag"></i>中文</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-japan flag"></i>日本語</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-germany flag"></i>Deutsch</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-france flag"></i>Français</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-spain flag"></i>Español</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-russia flag"></i>Русский</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="flag-portugal flag"></i>Português</a
                >
              </li>
            </ul>
          </li>

          <!-- Avatar -->
          <li class="nav-item dropdown">
            <a
              class="
                nav-link
                dropdown-toggle
                hidden-arrow
                d-flex
                align-items-center
              "
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                class="rounded-circle"
                height="22"
                alt="Avatar"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
  <!--Main Navigation-->

  <!--Main layout-->
  <main style="margin-top: 5px">
    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-12">
          <h1>Math</h1>
          <hr class="dashed" />
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Algebra</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button @click="Start">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Algebra</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Algebra</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Discrete Math</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-12">
          <h1>History</h1>
          <hr class="dashed" />
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">History of the World</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                For the History Believers.An awesome begginner Quiz
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Algebra</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Algebra</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Kenyan History</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
      </div>
    </div>
     <div class="container pt-4">
      <div class="row">
        <div class="col-sm-12">
          <h1>Biology</h1>
          <hr class="dashed" />
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">History of the World</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                For the History Believers.An awesome begginner Quiz
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Algebra</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Algebra</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card text-center">
            <div class="card-header">Kenyan History</div>
            <div class="card-body">
              <h5 class="card-title">Test Your Might!!</h5>
              <p class="card-text">
                Challenge your mind with good morning algebric mathemaics.
              </p>
              <button class="btn btn-primary">Start Quiz</button>
            </div>
            <div class="card-footer text-muted">*10</div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-left: 300px;
    text-align: left;
  }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.card {
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  position: absolute;
  display: block;
  --blend-mode: overlay;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
.container {
  margin-bottom: 240px;
}
.text {
  padding-left: 5px;
  text-align: left;
  height: 45px;
  text-size-adjust: 55;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>