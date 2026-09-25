<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>RO — Refined Objects</title>

  <link rel="stylesheet" href="style.css">
</head>

<body>


  <!-- ========================================
       HEADER
  ======================================== -->

  <header class="header">

    <div class="logo">
      RO
    </div>

    <nav>
      <a href="#">Home</a>
      <a href="#quiz">Gift Quiz</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>

  </header>



  <main>


    <!-- ========================================
         HERO
    ======================================== -->

    <section class="hero">

      <div class="hero-text">

        <p class="eyebrow">
          REFINED OBJECTS
        </p>

        <h1>
          The art of giving,
          <br>
          thoughtfully considered.
        </h1>

        <p class="description">
          A private selection of exceptional gifts,
          curated around the person, the occasion
          and the meaning behind the gesture.
        </p>

        <button onclick="startQuiz()">
          Begin the selection
        </button>

      </div>


      <div class="hero-image">

        <img
          src="a_clean_minimalist_top_down_flat_lay_style_produ.png"
          alt="RO Refined Objects gift box"
        >

      </div>

    </section>



    <!-- ========================================
         INTRODUCTION
    ======================================== -->

    <section class="features">

      <div class="feature">

        <span>01</span>

        <h3>
          Considered objects
        </h3>

        <p>
          We look beyond trends to find objects
          with quality, character and lasting appeal.
        </p>

      </div>


      <div class="feature">

        <span>02</span>

        <h3>
          Personal selection
        </h3>

        <p>
          Tell us about the person you're gifting.
          RO narrows the possibilities to a thoughtful
          selection made around them.
        </p>

      </div>


      <div class="feature">

        <span>03</span>

        <h3>
          Private concierge
        </h3>

        <p>
          For occasions that require something more,
          our concierge can personally assist with
          the final selection.
        </p>

      </div>

    </section>



    <!-- ========================================
         QUIZ
    ======================================== -->

    <section
      class="quiz"
      id="quiz"
      style="display: none;"
    >

      <div class="quiz-inner">

        <p class="eyebrow">
          THE RO GIFT QUIZ
        </p>

        <div class="quiz-progress">

          <span>01</span>

          <div class="progress-line"></div>

          <span>06</span>

        </div>


        <h2>
          Who are you
          <br>
          choosing for?
        </h2>


        <p class="quiz-description">
          A few thoughtful questions will help us
          understand the person behind the gift.
        </p>


        <div class="quiz-options">

          <button class="quiz-option">
            <span>01</span>
            Partner
          </button>

          <button class="quiz-option">
            <span>02</span>
            Family
          </button>

          <button class="quiz-option">
            <span>03</span>
            Friend
          </button>

          <button class="quiz-option">
            <span>04</span>
            Colleague
          </button>

          <button class="quiz-option">
            <span>05</span>
            Someone special
          </button>

        </div>

      </div>

    </section>

  </main>



  <!-- ========================================
       FOOTER
  ======================================== -->

  <footer>

    <div class="footer-logo">
      RO
    </div>

    <p>
      REFINED OBJECTS
    </p>

  </footer>



  <script src="script.js"></script>

</body>

</html>
