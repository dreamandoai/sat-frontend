import type { MathQuestionSet } from '../types/diagnosticTest';
import { 
  parallelLinesImage, 
  triangleImage, 
  rightTriangleImage, 
  histogramGroupsImage, 
  histogramDataImage, 
  co2AbsorptionGraph, 
  scatterplotMediumImage, 
  scatterplotHardImage, 
  probabilityTableImage, 
  probabilityHardTableImage, 
  linearFunctionTableImage, 
  percentagesTableImage 
} from './images';

export const mathQuestions: MathQuestionSet[] = [
  {
    questionType: 'LINEAR EQUATIONS IN 1 VARIABLE',
    easy: {
      id: 'math_linear_1var_easy',
      section: 'math',
      questionType: 'LINEAR EQUATIONS IN 1 VARIABLE',
      difficulty: 'easy',
      question: 'If 5 + 3x = 20, what is the value of 2x − 4?',
      options: ['6', '10', '14', '26'],
      correctAnswer: 0
    },
    medium: {
      id: 'math_linear_1var_medium',
      section: 'math',
      questionType: 'LINEAR EQUATIONS IN 1 VARIABLE',
      difficulty: 'medium',
      question: 'If 3(5−2x)+7=4(5−2x)+12, what is the value of 5−2x?',
      options: ['-5', '0', '5', '12'],
      correctAnswer: 0
    },
    hard: {
      id: 'math_linear_1var_hard',
      section: 'math',
      questionType: 'LINEAR EQUATIONS IN 1 VARIABLE',
      difficulty: 'hard',
      question: 'A company models its monthly profit using the equation:\n\n2(kx + 9) = (40/11)x + 54\n\nwhere k is a constant and x represents the number of items sold.\nThe equation has no solution.\nWhat is the value of k?',
      options: ['20/11', '40/11', '27/11', '40/22'],
      correctAnswer: 0
    }
  },
  {
    questionType: 'LINEAR EQUATIONS IN 2 VARIABLES',
    easy: {
      id: 'math_linear_2var_easy',
      section: 'math',
      questionType: 'LINEAR EQUATIONS IN 2 VARIABLES',
      difficulty: 'easy',
      question: 'Consider the system of equations:\n\n2x+3y=15\n\ny=3\n\nWhat is the solution (x,y) to the given system of equations?',
      options: ['(3,3)', '(6,3)', '(3,6)', '(6,6)'],
      correctAnswer: 0
    },
    medium: {
      id: 'math_linear_2var_medium',
      section: 'math',
      questionType: 'LINEAR EQUATIONS IN 2 VARIABLES',
      difficulty: 'medium',
      question: 'Consider the system of equations:\n\nx+2y=11\n\n2x−y=7\n\nThe solution to the given system of equations is (x,y). What is the value of x+3y?',
      options: ['14', '13', '16', '19'],
      correctAnswer: 0
    },
    hard: {
      id: 'math_linear_2var_hard',
      section: 'math',
      questionType: 'LINEAR EQUATIONS IN 2 VARIABLES',
      difficulty: 'hard',
      question: 'The graph of the function f is shown.\nWhich of the following equations defines f(x)?',
      options: ['f(x) = –¾x + 6', 'f(x) = –¾x – 6', 'f(x) = –⁴⁄₃x + 6', 'f(x) = ¾x + 6'],
      correctAnswer: 0
    }
  },
  {
    questionType: 'EQUIVALENT EXPRESSIONS',
    easy: {
      id: 'math_equiv_expr_easy',
      section: 'math',
      questionType: 'EQUIVALENT EXPRESSIONS',
      difficulty: 'easy',
      question: 'Which expression is equivalent to 15a²+8+7a²?',
      options: ['22a⁴+8', '22a²+8', '15a²+7a²+8', '30a²+8'],
      correctAnswer: 1
    },
    medium: {
      id: 'math_equiv_expr_medium',
      section: 'math',
      questionType: 'EQUIVALENT EXPRESSIONS',
      difficulty: 'medium',
      question: 'Which expression is a factor of 3x²−12x+5x−20?',
      options: ['x−4', 'x+5', '3x−5', '3x+4'],
      correctAnswer: 0
    },
    hard: {
      id: 'math_equiv_expr_hard',
      section: 'math',
      questionType: 'EQUIVALENT EXPRESSIONS',
      difficulty: 'hard',
      question: 'Let:\n\n(ax + 2)(4x² – bx + 1) = 16x³ – 23x² + cx + 2\n\nbe true for all real values of x.\nWhat is the value of abc?',
      options: ['42', '46', '52', '56'],
      correctAnswer: 3
    }
  },
  {
    questionType: 'LINEAR FUNCTIONS',
    easy: {
      id: 'math_linear_func_easy',
      section: 'math',
      questionType: 'LINEAR FUNCTIONS',
      difficulty: 'easy',
      question: 'For a linear relationship between x and y, the table gives three values of x and their corresponding values of y.\n\nWhich equation represents this relationship?',
      figureImage: linearFunctionTableImage,
      options: ['y=5x+50', 'y=x+50', 'y=50x+5', 'y=5x'],
      correctAnswer: 0
    },
    medium: {
      id: 'math_linear_func_medium',
      section: 'math',
      questionType: 'LINEAR FUNCTIONS',
      difficulty: 'medium',
      question: 'For the linear function f, f(2)=15 and f(6)=3. Which equation defines f?',
      options: ['f(x)=−3x+21', 'f(x)=−3x+9', 'f(x)=3x+9', 'f(x)=3x+21'],
      correctAnswer: 0
    },
    hard: {
      id: 'math_linear_func_hard',
      section: 'math',
      questionType: 'LINEAR FUNCTIONS',
      difficulty: 'hard',
      question: 'According to a report from the Open Meteorological Research Archive, the average temperature anomaly T (in degrees Celsius) across a region can be modeled as:\n\nT(x) = 0.84 – 0.12(x – 2)\n\nwhere x is the number of decades after the year 2000.\nWhat does the constant 0.84 represent?',
      options: ['The expected average temperature anomaly in 2020', 'The rate of decrease in anomaly per decade after 2020', 'The anomaly in the year 2000', 'The expected anomaly in 2022'],
      correctAnswer: 0
    }
  },
  {
    questionType: 'LINEAR INEQUALITIES',
    easy: {
      id: 'math_linear_ineq_easy',
      section: 'math',
      questionType: 'LINEAR INEQUALITIES',
      difficulty: 'easy',
      question: 'A student must read at least 250 pages for a literature class assignment. Which inequality represents the number of pages, p, the student must read for the assignment?',
      options: ['p<250', 'p≤250', 'p>250', 'p≥250'],
      correctAnswer: 3
    },
    medium: {
      id: 'math_linear_ineq_medium',
      section: 'math',
      questionType: 'LINEAR INEQUALITIES',
      difficulty: 'medium',
      question: 'A study estimates that a structure built near a riverbank must satisfy the inequality\n\ny ≥ 2x - 4\n\nwhere x represents the horizontal distance (in meters) from the riverbank, and y represents the elevation (in meters). Which of the following points represents a structure that meets the elevation safety requirements?',
      options: ['(1, -3)', '(3, 0)', '(2, -1)', '(5, 8)'],
      correctAnswer: 3
    },
    hard: {
      id: 'math_linear_ineq_hard',
      section: 'math',
      questionType: 'LINEAR INEQUALITIES',
      difficulty: 'hard',
      question: 'In a study of sugar intake, 42 of the first 120 participants consumed more than 30g of sugar from beverages. Among the remaining 120 participants, s did the same.\nIf more than 35% of all 240 participants consumed more than 30g from beverages, which inequality best describes s?',
      options: ['s > 0.35(240 – 42), with s ≤ 120', 's > 0.35(240 + 42), with s ≤ 120', 's > 0.35(240) – 42, with s ≤ 120', 's + 42 > 0.35(240), with s ≤ 120'],
      correctAnswer: 3
    }
  },
  {
    questionType: 'PERCENTAGES',
    easy: {
      id: 'math_percentages_easy',
      section: 'math',
      questionType: 'PERCENTAGES',
      difficulty: 'easy',
      question: 'A forest contains 840 trees. Of these trees, 15% are oak trees. How many oak trees are in the forest?',
      options: ['15', '84', '126', '714'],
      correctAnswer: 2
    },
    medium: {
      id: 'math_percentages_medium',
      section: 'math',
      questionType: 'PERCENTAGES',
      difficulty: 'medium',
      question: 'The table summarizes the number of different types of plants in a botanical garden section.\n\nThe number of Tulips is p% of the number of Lilies. What is the value of p?',
      figureImage: percentagesTableImage,
      options: ['30', '50', '60', '75'],
      correctAnswer: 1
    },
    hard: {
      id: 'math_percentages_hard',
      section: 'math',
      questionType: 'PERCENTAGES',
      difficulty: 'hard',
      question: 'A company increased its subscription price by 25%, causing 12% of users to cancel.\nIn March, they reduced the new price by 20% and regained 10% of the remaining users.\nLet original price = p, original subscribers = x.\nWhat is the total revenue in March?',
      options: ['0.9x × (1.25p)(0.8)', '0.88x × (1.25p)(0.8) + 0.10x × (1.25p)(0.8)', '(0.88x + 0.10x) × (1.25p)(0.8)', '(0.88x + 0.012x) × (1.25p)(0.8)'],
      correctAnswer: 3
    }
  },
  {
    questionType: 'RATIOS AND PROPORTIONAL RELATIONSHIPS',
    easy: {
      id: 'math_ratios_easy',
      section: 'math',
      questionType: 'RATIOS AND PROPORTIONAL RELATIONSHIPS',
      difficulty: 'easy',
      question: 'A biologist measures a cell sample with a diameter of 2,500 micrometers. At this rate, how many millimeters is the diameter of the cell sample? (Use 1 millimeter = 1,000 micrometers.)',
      options: ['0.25', '2.5', '25', '2,500'],
      correctAnswer: 1
    },
    medium: {
      id: 'math_ratios_medium',
      section: 'math',
      questionType: 'RATIOS AND PROPORTIONAL RELATIONSHIPS',
      difficulty: 'medium',
      question: 'The flow rate of water in a pipe was measured to be 0.05 grams per cubic centimeter. What is this estimated flow rate in grams per cubic meter? (Use 1 meter = 100 centimeters.)',
      options: ['0.00005', '5', '50', '50,000'],
      correctAnswer: 3
    },
    hard: {
      id: 'math_ratios_hard',
      section: 'math',
      questionType: 'RATIOS AND PROPORTIONAL RELATIONSHIPS',
      difficulty: 'hard',
      question: 'A 300mL bacterial solution has 120 million cells/mL.\nSaline is added at 75mL per minute. After t minutes:\n– total volume = 300 + 75t\n– total number of cells remains the same\nLet C(t) be the concentration (in millions/mL).\nWhich equation defines C(t)?',
      options: ['120t / (300 + 75t)', '36000 / (300 + 75t)', '120 / (1 + t/4)', '300 / (120 + 75t)'],
      correctAnswer: 1
    }
  },
  {
    questionType: 'SYSTEMS OF LINEAR EQUATIONS',
    easy: {
      id: 'math_systems_linear_easy',
      section: 'math',
      questionType: 'SYSTEMS OF LINEAR EQUATIONS',
      difficulty: 'easy',
      question: 'Consider the given system of equations:\n\n6m=72\n\n9m−50=n\n\nThe solution to the given system of equations is (m,n). What is the value of n?',
      options: ['12', '58', '72', '108'],
      correctAnswer: 1
    },
    medium: {
      id: 'math_systems_linear_medium',
      section: 'math',
      questionType: 'SYSTEMS OF LINEAR EQUATIONS',
      difficulty: 'medium',
      question: 'A local charity is organizing a fundraiser by selling two types of merchandise: t-shirts and hats. Each t-shirt costs $15 to produce, and each hat costs $10 to produce. The charity sold a total of 300 items and generated $3,800 in total revenue. Which system of equations can be used to find t, the number of t-shirts sold, and h, the number of hats sold?',
      options: ['t+h=300\n15t+10h=3800', 't+h=3800\n15t+10h=300', '15t+10h=300\nt+h=3800', '10t+15h=300\nt+h=3800'],
      correctAnswer: 0
    },
    hard: {
      id: 'math_systems_linear_hard',
      section: 'math',
      questionType: 'SYSTEMS OF LINEAR EQUATIONS',
      difficulty: 'hard',
      question: 'In the system of equations below, q is a constant:\n\n(4/5)x + (3/2)y = 29/10\nqx + 6y = 9\n\nIf the system has no solution, what is the value of q?',
      options: ['4/5', '8/5', '6/5', '12/5'],
      correctAnswer: 3
    }
  },
  {
    questionType: 'NONLINEAR EQUATIONS',
    easy: {
      id: 'math_nonlinear_eq_easy',
      section: 'math',
      questionType: 'NONLINEAR EQUATIONS',
      difficulty: 'easy',
      question: 'What are all possible solutions to the given equation (k+5)(k−9)=0?',
      options: ['-9 and 5', '-5 and 9', '5 and 9', '-5 and -9'],
      correctAnswer: 1
    },
    medium: {
      id: 'math_nonlinear_eq_medium',
      section: 'math',
      questionType: 'NONLINEAR EQUATIONS',
      difficulty: 'medium',
      question: '(x−18)²=9\n\nWhat is the sum of the solutions to the given equation?',
      options: ['3', '18', '36', '42'],
      correctAnswer: 2
    },
    hard: {
      id: 'math_nonlinear_eq_hard',
      section: 'math',
      questionType: 'NONLINEAR EQUATIONS',
      difficulty: 'hard',
      question: 'Let f(x) = |80 – 5x|\nA line y = mx + b passes through the origin and intersects the graph of f at exactly one point where f(x) = 3x.\nWhat is the value of x?',
      options: ['80/8', '80/5', '240/17', '280/13'],
      correctAnswer: 3
    }
  },
  {
    questionType: 'NONLINEAR FUNCTIONS',
    easy: {
      id: 'math_nonlinear_func_easy',
      section: 'math',
      questionType: 'NONLINEAR FUNCTIONS',
      difficulty: 'easy',
      question: 'The function g is defined by g(x)=20x−1. What is the value of g(5)?',
      options: ['-4', '41', '4', '100'],
      correctAnswer: 2
    },
    medium: {
      id: 'math_nonlinear_func_medium',
      section: 'math',
      questionType: 'NONLINEAR FUNCTIONS',
      difficulty: 'medium',
      question: 'The function\n\nh(t) = -0.5(t-4)² + 15\n\nmodels the height h(t), in meters, of a projectile t seconds after it was launched.\n\nWhich of the following best describes the vertex of the graph of y = h(t) in the t-h plane?',
      options: ['The projectile\'s minimum height was 4 meters above the ground.', 'The projectile\'s maximum height was 4 meters above the ground.', 'The projectile\'s minimum height was 15 meters above the ground.', 'The projectile\'s maximum height was 15 meters above the ground.'],
      correctAnswer: 3
    },
    hard: {
      id: 'math_nonlinear_func_hard',
      section: 'math',
      questionType: 'NONLINEAR FUNCTIONS',
      difficulty: 'hard',
      question: 'Let f(x) = a / (x + b), where a and b are nonzero constants.\nLet g(x) = f(x – 3).\nWhich of the following could define g(x)?',
      options: ['6 / (x – 2)', '6 / (x – 3 + 1)', '6 / (x + 1)', '6(x – 3) / (x + 1)'],
      correctAnswer: 0
    }
  },
  {
    questionType: 'LINES, ANGLES, AND TRIANGLES',
    easy: {
      id: 'math_lines_angles_easy',
      section: 'math',
      questionType: 'LINES, ANGLES, AND TRIANGLES',
      difficulty: 'easy',
      question: 'In the figure shown, the lines are parallel, and line r intersects both lines. If the measure of the angle on the lower line is 62°, what is the value of x?',
      figureImage: parallelLinesImage,
      options: ['62°', '118°', '28°', '90°'],
      correctAnswer: 1
    },
    medium: {
      id: 'math_lines_angles_medium',
      section: 'math',
      questionType: 'LINES, ANGLES, AND TRIANGLES',
      difficulty: 'medium',
      question: 'In the diagram above, triangle ABC has angles labeled as shown.\n\n∠BAC = 75°, ∠BCA = 40°, ∠ABC = x°\n\nWhat is the value of x?',
      figureImage: triangleImage,
      options: ['55°', '65°', '70°', '85°'],
      correctAnswer: 1
    },
    hard: {
      id: 'math_lines_angles_hard',
      section: 'math',
      questionType: 'LINES, ANGLES, AND TRIANGLES',
      difficulty: 'hard',
      question: 'In triangle ABC, AB = AC. Point D is on BC.\nIf ∠ABD = 40°, and ∠CAD = 35°, what is ∠BDC?',
      options: ['65°', '70°', '75°', '80°'],
      correctAnswer: 2
    }
  },
  {
    questionType: 'CIRCLES',
    easy: {
      id: 'math_circles_easy',
      section: 'math',
      questionType: 'CIRCLES',
      difficulty: 'easy',
      question: 'A circular garden has a radius of 12 meters. What is the area, in square meters, of the garden?',
      options: ['144π', '24π', '12π', '72π'],
      correctAnswer: 0
    },
    medium: {
      id: 'math_circles_medium',
      section: 'math',
      questionType: 'CIRCLES',
      difficulty: 'medium',
      question: 'Circle M in the xy-plane has the equation (x+4)²+(y−1)²=16. Circle N has the same center as circle M. The radius of circle N is two times the radius of circle M. The equation defining circle N in the xy-plane is (x+4)²+(y−1)²=k, where k is a constant. What is the value of k?',
      options: ['32', '64', '128', '256'],
      correctAnswer: 1
    },
    hard: {
      id: 'math_circles_hard',
      section: 'math',
      questionType: 'CIRCLES',
      difficulty: 'hard',
      question: 'In circle O, AB is a diameter.\nPoint C lies on the circle. A tangent at C meets extended AB at point D.\nIf ∠DCB = 28°, what is ∠CAB?',
      options: ['28°', '34°', '62°', '90°'],
      correctAnswer: 2
    }
  },
  {
    questionType: 'AREA AND VOLUME',
    easy: {
      id: 'math_area_volume_easy',
      section: 'math',
      questionType: 'AREA AND VOLUME',
      difficulty: 'easy',
      question: 'The perimeter of a square can be expressed as 4(89) units. What is the length, in units, of a side of this square?',
      options: ['89', '356', '22.25', '178'],
      correctAnswer: 0
    },
    medium: {
      id: 'math_area_volume_medium',
      section: 'math',
      questionType: 'AREA AND VOLUME',
      difficulty: 'medium',
      question: 'In a botanical research article, leaf A has an effective surface radius of 2x and leaf B has a radius of 94x. The area of leaf B is how many times the area of leaf A?',
      options: ['441', '2209', '188', '47'],
      correctAnswer: 1
    },
    hard: {
      id: 'math_area_volume_hard',
      section: 'math',
      questionType: 'AREA AND VOLUME',
      difficulty: 'hard',
      question: 'A sealed hexagonal prism has:\n– base side = 6 cm\n– height = 20 cm\n– top and lateral faces coated with a substance costing $0.05/cm²\nWhat is the total coating cost?',
      options: ['$51.96', '$59.60', '$74.88', '$89.25'],
      correctAnswer: 1
    }
  },
  {
    questionType: 'RIGHT TRIANGLES AND TRIGONOMETRY',
    easy: {
      id: 'math_trig_easy',
      section: 'math',
      questionType: 'RIGHT TRIANGLES AND TRIGONOMETRY',
      difficulty: 'easy',
      question: 'In the right triangle MNL shown, angle L is 90° and side MN = 61. Which expression represents the length of side ML in terms of angle N?',
      figureImage: rightTriangleImage,
      options: ['61 · cos(N)', '61 · sin(N)', '61/cos(N)', '61/sin(N)'],
      correctAnswer: 1
    },
    medium: {
      id: 'math_trig_medium',
      section: 'math',
      questionType: 'RIGHT TRIANGLES AND TRIGONOMETRY',
      difficulty: 'medium',
      question: 'In triangle LMN, the measure of angle L is 90°. Point P lies on segment MN, and segment LP is perpendicular to segment MN. The length of segment LP is 312 units, and the length of segment PN is 416 units. What is the value of tan(M)?',
      options: ['3/5', '3/4', '4/5', '5/4'],
      correctAnswer: 1
    },
    hard: {
      id: 'math_trig_hard',
      section: 'math',
      questionType: 'RIGHT TRIANGLES AND TRIGONOMETRY',
      difficulty: 'hard',
      question: 'In triangle ABC, angle C = 90°.\nPoint D is on AB, and CD ⊥ AB.\nAC = 8, BC = 6.\nWhat is sin(∠DAC)?',
      options: ['3/5', '4/5', '¾', '(2√10)/5'],
      correctAnswer: 3
    }
  },
  {
    questionType: 'SYSTEMS OF EQUATIONS',
    easy: {
      id: 'math_systems_eq_easy',
      section: 'math',
      questionType: 'SYSTEMS OF EQUATIONS',
      difficulty: 'easy',
      question: 'Consider the following system of equations:\n\ny = 0\n\ny = 3(x² − 49)\n\nWhich ordered pair (x,y) is a solution to this system of equations?',
      options: ['(0,7)', '(0,−49)', '(7,0)', '(49,0)'],
      correctAnswer: 2
    },
    medium: {
      id: 'math_systems_eq_medium',
      section: 'math',
      questionType: 'SYSTEMS OF EQUATIONS',
      difficulty: 'medium',
      question: 'Consider the following system of equations:\n\ny = x + 3\n\ny = x² - 2x - 1\n\nIf (a,b) is a solution to this system of equations, what is the greatest possible value of a?',
      options: ['-1', '0', '4', '5'],
      correctAnswer: 2
    },
    hard: {
      id: 'math_systems_eq_hard',
      section: 'math',
      questionType: 'SYSTEMS OF EQUATIONS',
      difficulty: 'hard',
      question: 'The following system is graphed:\n\ny = 2x² – 4x – 6\ny = 2x + 3\n\nThe graphs intersect at exactly one point.\nWhat is the x-value at that point?',
      options: ['–1', '–½', '3', '4'],
      correctAnswer: 2
    }
  },
  {
    questionType: 'ONE-VARIABLE DATA',
    easy: {
      id: 'math_one_var_data_easy',
      section: 'math',
      questionType: 'ONE-VARIABLE DATA',
      difficulty: 'easy',
      question: 'For a certain experimental trial, the positive temperature T, in degrees Celsius, must be less than 120 degrees Celsius. Which inequality represents this situation?',
      options: ['T>120', 'T<0', '−120<T<0', '0<T<120'],
      correctAnswer: 3
    },
    medium: {
      id: 'math_one_var_data_medium',
      section: 'math',
      questionType: 'ONE-VARIABLE DATA',
      difficulty: 'medium',
      question: 'Two histograms summarize the distributions of scores for Group X and Group Y. Based on the distributions shown, which statement best compares the standard deviations of scores for these groups?',
      figureImage: histogramGroupsImage,
      options: ['The standard deviation of scores for Group X is less than the standard deviation of scores for Group Y.', 'The standard deviation of scores for Group X is greater than the standard deviation of scores for Group Y.', 'The standard deviation of scores for Group X is equal to the standard deviation of scores for Group Y.', 'There is not enough information to compare the standard deviations.'],
      correctAnswer: 0
    },
    hard: {
      id: 'math_one_var_data_hard',
      section: 'math',
      questionType: 'ONE-VARIABLE DATA',
      difficulty: 'hard',
      question: 'A histogram summarizes the distribution of citation data for 50 research articles. If a newly published article receives 26 citations and this value is added to create a new data set of 51 values, which statements must be true?\n\nI. The median number of citations per paper for the new data set is less than the median for the original data set.\nII. The mean number of citations per paper for the new data set is less than the mean for the original data set.',
      figureImage: histogramDataImage,
      options: ['I only', 'II only', 'I and II', 'Neither I nor II'],
      correctAnswer: 2
    }
  },
  {
    questionType: 'TWO-VARIABLE DATA AND SCATTERPLOTS',
    easy: {
      id: 'math_two_var_data_easy',
      section: 'math',
      questionType: 'TWO-VARIABLE DATA AND SCATTERPLOTS',
      difficulty: 'easy',
      question: 'A graph shows the CO₂ absorption, in milligrams (mg), of a plant over time, in minutes, after it was exposed to sunlight. The absorption is modeled from time 0 ≤ t ≤ 8 minutes. What is the average rate of change, in milligrams per minute, of CO₂ absorption from minute 2 to minute 6?',
      figureImage: co2AbsorptionGraph,
      options: ['2.5', '3.0', '3.5', '4.0'],
      correctAnswer: 0
    },
    medium: {
      id: 'math_two_var_data_medium',
      section: 'math',
      questionType: 'TWO-VARIABLE DATA AND SCATTERPLOTS',
      difficulty: 'medium',
      question: 'In a scatterplot with a line of best fit shown, which of the following is closest to the slope of this line of best fit?',
      figureImage: scatterplotMediumImage,
      options: ['−0.6', '−6', '0.6', '6'],
      correctAnswer: 0
    },
    hard: {
      id: 'math_two_var_data_hard',
      section: 'math',
      questionType: 'TWO-VARIABLE DATA AND SCATTERPLOTS',
      difficulty: 'hard',
      question: 'Aiko weighed a set of 72 mineral samples. The lightest sample had a mass of 12.4 g, and the heaviest sample had a mass of 31.7 g. Blake weighed the same 72 samples and also an additional sample that had a mass of 42.8 g. Which of the following must be true about the set of samples Aiko weighed and the set of samples Blake weighed?',
      figureImage: scatterplotHardImage,
      options: ['The standard deviation of the masses of Aiko\'s samples is greater than the standard deviation of the masses of Blake\'s samples.', 'The range of the masses of Aiko\'s samples is less than the range of the masses of Blake\'s samples.', 'The median mass of Aiko\'s samples is greater than the median mass of Blake\'s samples.', 'The mean mass of Aiko\'s samples is greater than the mean mass of Blake\'s samples.'],
      correctAnswer: 1
    }
  },
  {
    questionType: 'PROBABILITY AND CONDITIONAL PROBABILITY',
    easy: {
      id: 'math_probability_easy',
      section: 'math',
      questionType: 'PROBABILITY AND CONDITIONAL PROBABILITY',
      difficulty: 'easy',
      question: 'Each face of a fair 8-sided dice is labeled with a number from 1 through 8, with a different number appearing on each face. If the dice is rolled one time, what is the probability of rolling a 3?',
      options: ['1/3', '1/8', '3/8', '7/8'],
      correctAnswer: 1
    },
    medium: {
      id: 'math_probability_medium',
      section: 'math',
      questionType: 'PROBABILITY AND CONDITIONAL PROBABILITY',
      difficulty: 'medium',
      question: 'A survey regarding participation in school sports among 250 high school students shows the results by gender and sport participation. What proportion of students who are female reported participating in a school sport?',
      figureImage: probabilityTableImage,
      options: ['2/5', '5/2', '13/4', '5/3'],
      correctAnswer: 0
    },
    hard: {
      id: 'math_probability_hard',
      section: 'math',
      questionType: 'PROBABILITY AND CONDITIONAL PROBABILITY',
      difficulty: 'hard',
      question: 'A university surveyed 180 students about their current degree enrollment across academic divisions and degree levels. Suppose a student is randomly selected from the entire survey group. Which statement is true?\n\n(Note: This question references a data table with Arts & Humanities, STEM, and Business divisions.)',
      figureImage: probabilityHardTableImage,
      options: ['The probability that the student is a graduate STEM student is greater than the combined probability of selecting either a graduate Arts & Humanities student or an undergraduate Business student.', 'The number of undergraduate Arts & Humanities students is greater than the combined total of graduate Business and graduate STEM students.', 'The percent of graduate STEM students in the entire group is less than 12%.', 'The probability that the student is not in STEM is less than 50%.'],
      correctAnswer: 0
    }
  },
  {
    questionType: 'INFERENCE FROM SAMPLE STATISTICS',
    easy: {
      id: 'math_inference_easy',
      section: 'math',
      questionType: 'INFERENCE FROM SAMPLE STATISTICS',
      difficulty: 'easy',
      question: 'A large company wanted to know how many of its 12,000 employees would be interested in a new flexible work schedule. The company randomly selected 300 employees and asked each whether they would be interested in the new schedule. Of those surveyed, 40 said they would be interested. Which of the following is the best estimate of the total number of employees who would be interested in the new flexible work schedule?',
      options: ['40', '160', '400', '1,600'],
      correctAnswer: 3
    },
    medium: {
      id: 'math_inference_medium',
      section: 'math',
      questionType: 'INFERENCE FROM SAMPLE STATISTICS',
      difficulty: 'medium',
      question: 'A large national park system wanted to know how many of its 150,000 annual visitors would be interested in guided hiking tours. The park system selected 600 visitors at random and asked each visitor whether they would be interested in the tours. Of those surveyed, 15 said they would be interested. Which of the following is the best estimate of the total number of annual visitors who would not be interested in the guided hiking tours?',
      options: ['3,750', '146,250', '149,400', '150,000'],
      correctAnswer: 1
    },
    hard: {
      id: 'math_inference_hard',
      section: 'math',
      questionType: 'INFERENCE FROM SAMPLE STATISTICS',
      difficulty: 'hard',
      question: 'An environmental agency wants to estimate how many of the 50,000 residents of a coastal city would voluntarily participate in a newly proposed plastic collection initiative. The agency randomly selects 250 residents and asks each if they would participate. 5 of those surveyed say yes. Based on this data, which of the following is the best estimate of the total number of city residents who would participate in the initiative?',
      options: ['5', '50', '1,000', '10,000'],
      correctAnswer: 2
    }
  }
];