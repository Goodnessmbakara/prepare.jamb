export interface StudyNote {
  id: string;
  subjectId: string;
  title: string;
  order: number;
  content: {
    overview: string;
    topics: Array<{
      title: string;
      subtopics: Array<{
        title: string;
        content: string;
        keyPoints: string[];
      }>;
      objectives: string[];
    }>;
  };
}

export const mathematicsNotes: StudyNote[] = [
  {
    id: "math-note-001",
    subjectId: "mathematics",
    title: "Number and Numeration",
    order: 1,
    content: {
      overview: "Number and Numeration covers the fundamental concepts of number systems, operations, and their applications. This section forms the foundation for all mathematical calculations and problem-solving in JAMB.",
      topics: [
        {
          title: "Number Bases",
          subtopics: [
            {
              title: "Understanding Number Bases",
              content: "A number base is the number of unique digits, including zero, used to represent numbers in a positional numeral system. The most common bases are base 10 (decimal), base 2 (binary), base 8 (octal), and base 16 (hexadecimal). In base n, digits range from 0 to n-1. For example, in base 5, valid digits are 0, 1, 2, 3, and 4.",
              keyPoints: [
                "Base 10 uses digits 0-9 (our everyday number system)",
                "Base 2 uses only 0 and 1 (computer binary system)",
                "Base 8 uses digits 0-7",
                "The subscript indicates the base: 1011₂ means 1011 in base 2",
                "Each position represents a power of the base"
              ]
            },
            {
              title: "Converting Between Bases",
              content: "To convert from any base to base 10, multiply each digit by the base raised to its position power (starting from 0 on the right). For example: 1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀. To convert from base 10 to another base, repeatedly divide by the new base and record remainders from bottom to top.",
              keyPoints: [
                "Base n to base 10: multiply each digit by n^position",
                "Base 10 to base n: divide repeatedly by n, read remainders backwards",
                "Direct conversion between bases: convert to base 10 first, then to target base",
                "Practice with common bases: 2, 5, 8, and 16"
              ]
            }
          ],
          objectives: [
            "Convert numbers from one base to another",
            "Perform basic operations in different number bases",
            "Understand the concept of place value in different bases",
            "Apply number base conversions to solve problems"
          ]
        },
        {
          title: "Fractions, Decimals, and Percentages",
          subtopics: [
            {
              title: "Types of Fractions",
              content: "Fractions represent parts of a whole. A proper fraction has a numerator smaller than the denominator (e.g., 3/4). An improper fraction has a numerator greater than or equal to the denominator (e.g., 7/4). A mixed number combines a whole number and a proper fraction (e.g., 1¾). Converting between these forms is essential: 7/4 = 1¾ by dividing 7 by 4.",
              keyPoints: [
                "Proper fraction: numerator < denominator",
                "Improper fraction: numerator ≥ denominator",
                "Mixed number = whole number + proper fraction",
                "To add/subtract: find common denominator",
                "To multiply: multiply numerators and denominators",
                "To divide: multiply by reciprocal"
              ]
            },
            {
              title: "Decimal Operations",
              content: "Decimals are another way to represent fractions using base 10. The position of digits after the decimal point represents tenths, hundredths, thousandths, etc. Converting fractions to decimals involves division: 3/4 = 0.75. Converting decimals to fractions: 0.75 = 75/100 = 3/4 (simplified). Recurring decimals like 0.333... = 1/3 require special techniques.",
              keyPoints: [
                "Terminating decimals end after finite digits (0.5, 0.75)",
                "Recurring decimals repeat infinitely (0.333..., 0.142857...)",
                "To convert fraction to decimal: divide numerator by denominator",
                "Place value: 0.456 = 4/10 + 5/100 + 6/1000",
                "Align decimal points when adding or subtracting"
              ]
            },
            {
              title: "Percentage Applications",
              content: "Percentage means 'per hundred' and is denoted by %. To convert a fraction to percentage, multiply by 100. To convert percentage to fraction, divide by 100. Common applications include profit/loss (Profit = SP - CP), discount (Discount = marked price × discount %), simple interest (SI = PRT/100), and compound interest (CI = P(1 + r/100)ⁿ - P).",
              keyPoints: [
                "To convert to percentage: multiply by 100%",
                "Percentage increase: (increase/original) × 100%",
                "Percentage decrease: (decrease/original) × 100%",
                "Profit % = (Profit/CP) × 100%",
                "Loss % = (Loss/CP) × 100%",
                "Simple Interest formula: SI = (P × R × T)/100"
              ]
            }
          ],
          objectives: [
            "Convert between fractions, decimals, and percentages",
            "Perform operations with fractions and decimals accurately",
            "Solve real-world problems involving percentages",
            "Calculate profit, loss, discount, and interest"
          ]
        },
        {
          title: "Indices and Logarithms",
          subtopics: [
            {
              title: "Laws of Indices",
              content: "Indices (or exponents) indicate how many times a number is multiplied by itself. Key laws: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1 (a ≠ 0), a⁻ⁿ = 1/aⁿ, a^(m/n) = ⁿ√(aᵐ). Negative indices represent reciprocals, and fractional indices represent roots.",
              keyPoints: [
                "aᵐ × aⁿ = aᵐ⁺ⁿ (multiply: add powers)",
                "aᵐ ÷ aⁿ = aᵐ⁻ⁿ (divide: subtract powers)",
                "(aᵐ)ⁿ = aᵐⁿ (power of power: multiply)",
                "a⁰ = 1 for any non-zero a",
                "a⁻ⁿ = 1/aⁿ (negative power = reciprocal)",
                "a^(1/n) = ⁿ√a (fractional power = root)"
              ]
            },
            {
              title: "Logarithms",
              content: "A logarithm is the inverse of exponentiation. If aˣ = b, then logₐ(b) = x. Common bases are 10 (common logarithm, log) and e (natural logarithm, ln). Laws of logarithms: log(xy) = log x + log y, log(x/y) = log x - log y, log(xⁿ) = n log x, logₐ(a) = 1, logₐ(1) = 0. Change of base: logₐ(b) = logc(b)/logc(a).",
              keyPoints: [
                "If aˣ = b, then logₐ(b) = x",
                "log(xy) = log x + log y (product rule)",
                "log(x/y) = log x - log y (quotient rule)",
                "log(xⁿ) = n log x (power rule)",
                "logₐ(a) = 1 and logₐ(1) = 0",
                "Change of base formula: logₐ(b) = log(b)/log(a)"
              ]
            }
          ],
          objectives: [
            "Apply laws of indices to simplify expressions",
            "Solve equations involving indices",
            "Understand the relationship between indices and logarithms",
            "Use logarithm laws to solve problems"
          ]
        },
        {
          title: "Surds and Approximations",
          subtopics: [
            {
              title: "Operations with Surds",
              content: "A surd is an irrational root that cannot be simplified to a whole number or fraction (e.g., √2, √3, ³√5). Rules for surds: √a × √b = √(ab), √a ÷ √b = √(a/b), (√a)² = a. Rationalizing the denominator means removing surds from denominators: 1/√2 = √2/2. For expressions like 1/(a+√b), multiply by the conjugate: 1/(2+√3) × (2-√3)/(2-√3).",
              keyPoints: [
                "√a × √b = √(ab)",
                "√a + √b cannot be simplified to √(a+b)",
                "Rationalize: multiply by conjugate to remove surd from denominator",
                "Conjugate of a+√b is a-√b",
                "Simplify surds: √12 = √(4×3) = 2√3"
              ]
            },
            {
              title: "Approximation and Standard Form",
              content: "Approximation involves rounding numbers to a specified number of decimal places or significant figures. Significant figures are the meaningful digits in a number. Standard form (scientific notation) expresses numbers as a × 10ⁿ where 1 ≤ a < 10. Examples: 3400 = 3.4 × 10³, 0.00056 = 5.6 × 10⁻⁴. This is useful for very large or very small numbers.",
              keyPoints: [
                "Decimal places: count digits after decimal point",
                "Significant figures: count all non-zero digits and zeros between them",
                "Standard form: a × 10ⁿ where 1 ≤ a < 10",
                "Positive n for large numbers, negative n for small numbers",
                "Maintain accuracy when performing operations"
              ]
            }
          ],
          objectives: [
            "Simplify expressions involving surds",
            "Rationalize denominators containing surds",
            "Express numbers in standard form",
            "Round numbers to specified decimal places or significant figures"
          ]
        }
      ]
    }
  },
  {
    id: "math-note-002",
    subjectId: "mathematics",
    title: "Algebra",
    order: 2,
    content: {
      overview: "Algebra is the branch of mathematics dealing with symbols and the rules for manipulating these symbols. It provides a powerful way to describe patterns, make generalizations, and solve complex problems systematically.",
      topics: [
        {
          title: "Algebraic Expressions and Equations",
          subtopics: [
            {
              title: "Simplifying Algebraic Expressions",
              content: "An algebraic expression contains variables, constants, and operations. Simplification involves combining like terms (terms with the same variable and power). For example: 3x + 5x - 2x = 6x. When multiplying, use the distributive property: a(b + c) = ab + ac. For division, factor where possible and cancel common factors.",
              keyPoints: [
                "Like terms have identical variable parts",
                "Combine coefficients of like terms",
                "Distributive property: a(b + c) = ab + ac",
                "FOIL method for (a+b)(c+d): ac + ad + bc + bd",
                "Factor before canceling in division"
              ]
            },
            {
              title: "Linear Equations",
              content: "A linear equation is an equation of the form ax + b = c where the highest power of the variable is 1. To solve: isolate the variable by performing inverse operations on both sides. Steps: 1) Remove brackets, 2) Collect like terms, 3) Isolate variable terms on one side, 4) Divide by coefficient. Example: 3x + 5 = 14 → 3x = 9 → x = 3.",
              keyPoints: [
                "Linear equation has degree 1 (highest power is 1)",
                "Whatever you do to one side, do to the other",
                "Inverse operations: add ↔ subtract, multiply ↔ divide",
                "Check solution by substituting back",
                "Graph is a straight line"
              ]
            },
            {
              title: "Quadratic Equations",
              content: "A quadratic equation has the form ax² + bx + c = 0. Three main methods to solve: 1) Factorization: if (x-p)(x-q) = 0, then x = p or x = q, 2) Completing the square, 3) Quadratic formula: x = [-b ± √(b²-4ac)]/(2a). The discriminant Δ = b² - 4ac determines the nature of roots: Δ > 0 (two real roots), Δ = 0 (one repeated root), Δ < 0 (no real roots).",
              keyPoints: [
                "Standard form: ax² + bx + c = 0",
                "Factorization works when roots are rational",
                "Quadratic formula works for all quadratic equations",
                "Discriminant: Δ = b² - 4ac",
                "Sum of roots: -b/a, Product of roots: c/a"
              ]
            },
            {
              title: "Simultaneous Equations",
              content: "Simultaneous equations are two or more equations with two or more unknowns that are solved together. Methods: 1) Elimination: multiply equations to make coefficients of one variable equal, then add or subtract, 2) Substitution: solve one equation for a variable and substitute into the other. For linear-quadratic systems, substitution is usually preferred.",
              keyPoints: [
                "Two equations needed for two unknowns",
                "Elimination: make coefficients equal, then eliminate",
                "Substitution: express one variable in terms of another",
                "Check solutions in both original equations",
                "Linear-quadratic systems may have 0, 1, or 2 solutions"
              ]
            }
          ],
          objectives: [
            "Simplify algebraic expressions using algebraic laws",
            "Solve linear equations in one variable",
            "Solve quadratic equations by factorization, completing the square, and formula",
            "Solve simultaneous equations in two variables"
          ]
        },
        {
          title: "Inequalities",
          subtopics: [
            {
              title: "Linear Inequalities",
              content: "An inequality shows that one expression is greater than, less than, greater than or equal to, or less than or equal to another. Solve like equations, but remember: when multiplying or dividing by a negative number, reverse the inequality sign. Example: -2x > 6 → x < -3. Solution sets can be shown on a number line or in set notation.",
              keyPoints: [
                "< means less than, > means greater than",
                "≤ means less than or equal to, ≥ means greater than or equal to",
                "Reverse inequality when multiplying/dividing by negative",
                "Solution is a range of values, not a single value",
                "Use open circle (○) for < or >, closed circle (●) for ≤ or ≥"
              ]
            },
            {
              title: "Quadratic Inequalities",
              content: "To solve quadratic inequalities like x² - 5x + 6 < 0: 1) Factorize: (x-2)(x-3) < 0, 2) Find critical values (x = 2, x = 3), 3) Test intervals: x < 2, 2 < x < 3, x > 3, 4) Determine which intervals satisfy the inequality. For this example, the solution is 2 < x < 3. Always use a number line to visualize.",
              keyPoints: [
                "Factorize the quadratic expression",
                "Find critical values (roots)",
                "Divide number line into intervals",
                "Test a value from each interval",
                "Solution is interval(s) that satisfy the inequality"
              ]
            }
          ],
          objectives: [
            "Solve linear inequalities in one variable",
            "Solve quadratic inequalities",
            "Represent solution sets on number lines",
            "Solve word problems involving inequalities"
          ]
        },
        {
          title: "Sequences and Series",
          subtopics: [
            {
              title: "Arithmetic Progressions (AP)",
              content: "An arithmetic progression is a sequence where the difference between consecutive terms is constant. This difference is called the common difference (d). The nth term formula is: Tₙ = a + (n-1)d, where a is the first term. The sum of n terms is: Sₙ = n/2[2a + (n-1)d] or Sₙ = n/2(a + l), where l is the last term.",
              keyPoints: [
                "Common difference: d = T₂ - T₁",
                "nth term: Tₙ = a + (n-1)d",
                "Sum of n terms: Sₙ = n/2[2a + (n-1)d]",
                "Alternative sum formula: Sₙ = n/2(first + last)",
                "Example AP: 2, 5, 8, 11, 14... (d = 3)"
              ]
            },
            {
              title: "Geometric Progressions (GP)",
              content: "A geometric progression is a sequence where each term is obtained by multiplying the previous term by a constant called the common ratio (r). The nth term formula is: Tₙ = arⁿ⁻¹. The sum of n terms is: Sₙ = a(rⁿ - 1)/(r - 1) for r > 1, or Sₙ = a(1 - rⁿ)/(1 - r) for r < 1. For an infinite GP with |r| < 1, S∞ = a/(1 - r).",
              keyPoints: [
                "Common ratio: r = T₂/T₁",
                "nth term: Tₙ = arⁿ⁻¹",
                "Sum of n terms: Sₙ = a(rⁿ - 1)/(r - 1) when r ≠ 1",
                "Sum to infinity: S∞ = a/(1 - r) when |r| < 1",
                "Example GP: 3, 6, 12, 24, 48... (r = 2)"
              ]
            }
          ],
          objectives: [
            "Identify arithmetic and geometric progressions",
            "Find the nth term of AP and GP",
            "Calculate sum of n terms of AP and GP",
            "Solve problems involving AP and GP"
          ]
        },
        {
          title: "Variation",
          subtopics: [
            {
              title: "Direct and Inverse Variation",
              content: "Direct variation: y ∝ x means y = kx for some constant k. If x increases, y increases proportionally. Inverse variation: y ∝ 1/x means y = k/x. If x increases, y decreases proportionally. Joint variation combines these: z ∝ xy means z = kxy. Partial variation: y = kx + c (linear relationship with y-intercept).",
              keyPoints: [
                "Direct variation: y ∝ x → y = kx",
                "Inverse variation: y ∝ 1/x → y = k/x",
                "Joint variation: z ∝ xy → z = kxy",
                "Find k using given values, then solve",
                "Check if ratio or product is constant"
              ]
            }
          ],
          objectives: [
            "Identify direct, inverse, and joint variation",
            "Solve problems involving variation",
            "Express one variable in terms of others",
            "Apply variation to real-world situations"
          ]
        }
      ]
    }
  },
  {
    id: "math-note-003",
    subjectId: "mathematics",
    title: "Geometry and Trigonometry",
    order: 3,
    content: {
      overview: "Geometry studies the properties and relationships of points, lines, angles, surfaces, and solids. Trigonometry deals with the relationships between sides and angles in triangles. Together, they provide tools for solving real-world problems involving distance, measurement, and spatial relationships.",
      topics: [
        {
          title: "Angles and Polygons",
          subtopics: [
            {
              title: "Types of Angles",
              content: "Angles are formed when two rays meet at a point. Acute angle: 0° < θ < 90°. Right angle: θ = 90°. Obtuse angle: 90° < θ < 180°. Straight angle: θ = 180°. Reflex angle: 180° < θ < 360°. Complementary angles sum to 90°. Supplementary angles sum to 180°. Vertically opposite angles are equal. Adjacent angles on a straight line sum to 180°.",
              keyPoints: [
                "Acute: 0° < angle < 90°",
                "Right: angle = 90°",
                "Obtuse: 90° < angle < 180°",
                "Complementary angles: sum = 90°",
                "Supplementary angles: sum = 180°",
                "Vertically opposite angles are equal"
              ]
            },
            {
              title: "Properties of Polygons",
              content: "A polygon is a closed figure with straight sides. Regular polygon: all sides and angles equal. Sum of interior angles of n-sided polygon: (n-2) × 180°. Each interior angle of regular polygon: (n-2) × 180°/n. Sum of exterior angles of any polygon: 360°. Each exterior angle of regular polygon: 360°/n. Common polygons: triangle (3), quadrilateral (4), pentagon (5), hexagon (6), octagon (8).",
              keyPoints: [
                "Sum of interior angles: (n-2) × 180°",
                "Each interior angle (regular): (n-2) × 180°/n",
                "Sum of exterior angles: always 360°",
                "Each exterior angle (regular): 360°/n",
                "Interior + Exterior angle = 180°"
              ]
            }
          ],
          objectives: [
            "Identify and classify different types of angles",
            "Calculate angles in polygons",
            "Apply angle properties to solve problems",
            "Understand properties of regular and irregular polygons"
          ]
        },
        {
          title: "Triangles and Circles",
          subtopics: [
            {
              title: "Properties of Triangles",
              content: "Types by sides: equilateral (3 equal sides), isosceles (2 equal sides), scalene (no equal sides). Types by angles: acute (all angles < 90°), right (one 90° angle), obtuse (one angle > 90°). Sum of angles in a triangle = 180°. Exterior angle = sum of two opposite interior angles. Pythagorean theorem for right triangles: a² + b² = c² (where c is the hypotenuse).",
              keyPoints: [
                "Sum of angles in any triangle = 180°",
                "Pythagorean theorem: a² + b² = c²",
                "Exterior angle = sum of opposite interior angles",
                "Equilateral: all sides and angles equal (each angle = 60°)",
                "Isosceles: two equal sides, two equal base angles"
              ]
            },
            {
              title: "Circle Theorems",
              content: "Key circle definitions: circumference = 2πr, area = πr². Chord: line segment joining two points on circle. Tangent: line touching circle at one point; perpendicular to radius at that point. Arc: part of circumference. Sector: region bounded by two radii and an arc. Important theorems: angle in semicircle is 90°, angles in same segment are equal, angle at center = 2 × angle at circumference (same arc).",
              keyPoints: [
                "Circumference = 2πr = πd",
                "Area = πr²",
                "Angle in a semicircle = 90°",
                "Tangent perpendicular to radius at point of contact",
                "Angle at center = 2 × angle at circumference",
                "Angles in same segment are equal"
              ]
            }
          ],
          objectives: [
            "Apply properties of triangles to solve problems",
            "Use Pythagorean theorem in right triangles",
            "Calculate arc length, sector area, and segment area",
            "Apply circle theorems to find unknown angles"
          ]
        },
        {
          title: "Trigonometry",
          subtopics: [
            {
              title: "Basic Trigonometric Ratios",
              content: "For a right triangle with angle θ: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. SOH-CAH-TOA is a helpful mnemonic. Important values: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3; sin 45° = 1/√2, cos 45° = 1/√2, tan 45° = 1; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. Use calculator for other angles.",
              keyPoints: [
                "sin θ = opposite/hypotenuse (SOH)",
                "cos θ = adjacent/hypotenuse (CAH)",
                "tan θ = opposite/adjacent (TOA)",
                "sin²θ + cos²θ = 1 (Pythagorean identity)",
                "tan θ = sin θ/cos θ",
                "Memorize special angles: 30°, 45°, 60°"
              ]
            },
            {
              title: "Sine and Cosine Rules",
              content: "For any triangle (not just right triangles): Sine rule: a/sin A = b/sin B = c/sin C (use when you have angle-side-angle or two sides and non-included angle). Cosine rule: a² = b² + c² - 2bc cos A (use when you have three sides or two sides and included angle). Area of triangle = 1/2 ab sin C = 1/2 base × height.",
              keyPoints: [
                "Sine rule: a/sin A = b/sin B = c/sin C",
                "Cosine rule: a² = b² + c² - 2bc cos A",
                "Use sine rule for ASA or SSA triangles",
                "Use cosine rule for SAS or SSS triangles",
                "Area = 1/2 ab sin C"
              ]
            },
            {
              title: "Angles of Elevation and Depression",
              content: "Angle of elevation: angle above horizontal when looking up at an object. Angle of depression: angle below horizontal when looking down at an object. These are alternate angles when you draw horizontal lines from observer and object. Use trigonometric ratios to solve: if you know distance and angle, use tan to find height; if you know height and angle, use tan to find distance.",
              keyPoints: [
                "Elevation: looking up from horizontal",
                "Depression: looking down from horizontal",
                "Angles of elevation and depression are alternate angles",
                "Draw clear diagrams with horizontal lines",
                "Use tan ratio for most problems: tan θ = height/distance"
              ]
            }
          ],
          objectives: [
            "Use trigonometric ratios to find sides and angles",
            "Apply sine and cosine rules to non-right triangles",
            "Solve problems involving angles of elevation and depression",
            "Calculate areas of triangles using trigonometry"
          ]
        },
        {
          title: "Mensuration",
          subtopics: [
            {
              title: "Areas and Perimeters",
              content: "Rectangle: Area = length × width, Perimeter = 2(l + w). Square: Area = s², Perimeter = 4s. Triangle: Area = 1/2 base × height. Parallelogram: Area = base × height. Trapezium: Area = 1/2(a + b)h where a, b are parallel sides. Circle: Area = πr², Circumference = 2πr. Compound shapes: break into simpler shapes and add/subtract areas.",
              keyPoints: [
                "Rectangle area = length × width",
                "Triangle area = 1/2 base × height",
                "Circle area = πr², circumference = 2πr",
                "Trapezium area = 1/2(sum of parallel sides) × height",
                "For compound shapes: break down and combine"
              ]
            },
            {
              title: "Volumes and Surface Areas",
              content: "Cube: Volume = s³, Surface area = 6s². Cuboid: Volume = lwh, Surface area = 2(lw + lh + wh). Cylinder: Volume = πr²h, Curved surface area = 2πrh, Total surface area = 2πr(r + h). Cone: Volume = 1/3 πr²h, Curved surface area = πrl (l = slant height). Sphere: Volume = 4/3 πr³, Surface area = 4πr².",
              keyPoints: [
                "Cube volume = s³",
                "Cuboid volume = length × width × height",
                "Cylinder volume = πr²h",
                "Cone volume = 1/3 πr²h",
                "Sphere volume = 4/3 πr³, surface area = 4πr²"
              ]
            }
          ],
          objectives: [
            "Calculate perimeters and areas of plane figures",
            "Calculate volumes and surface areas of solid figures",
            "Solve real-world problems involving mensuration",
            "Work with compound shapes and composite solids"
          ]
        }
      ]
    }
  },
  {
    id: "math-note-004",
    subjectId: "mathematics",
    title: "Calculus",
    order: 4,
    content: {
      overview: "Calculus is the mathematics of change. It has two main branches: differentiation (finding rates of change) and integration (finding areas and accumulations). Calculus is fundamental to physics, engineering, economics, and many other fields.",
      topics: [
        {
          title: "Differentiation",
          subtopics: [
            {
              title: "Gradient of Curves",
              content: "The gradient (or derivative) of a curve at a point represents the rate of change of y with respect to x at that point. It equals the slope of the tangent line to the curve at that point. The derivative of y = f(x) is written as dy/dx or f'(x). Geometrically, it's the limit of Δy/Δx as Δx approaches 0. For linear functions, the gradient is constant; for curves, it varies at different points.",
              keyPoints: [
                "Gradient = rate of change = slope of tangent",
                "dy/dx represents derivative of y with respect to x",
                "Positive gradient: function increasing",
                "Negative gradient: function decreasing",
                "Zero gradient: horizontal tangent (turning point)"
              ]
            },
            {
              title: "Differentiation Rules",
              content: "Basic power rule: if y = xⁿ, then dy/dx = nxⁿ⁻¹. Constant rule: derivative of constant is 0. Constant multiple rule: d/dx[cf(x)] = c·f'(x). Sum rule: d/dx[f(x) + g(x)] = f'(x) + g'(x). Examples: y = x³ → dy/dx = 3x²; y = 5x⁴ → dy/dx = 20x³; y = x² + 3x - 5 → dy/dx = 2x + 3.",
              keyPoints: [
                "Power rule: d/dx(xⁿ) = nxⁿ⁻¹",
                "d/dx(constant) = 0",
                "d/dx(ax) = a",
                "Differentiate term by term",
                "Simplify before differentiating when possible"
              ]
            },
            {
              title: "Applications of Differentiation",
              content: "Maximum and minimum points (turning points) occur where dy/dx = 0. To determine type: use second derivative d²y/dx². If d²y/dx² > 0, it's a minimum; if d²y/dx² < 0, it's a maximum. Applications include: finding maximum profit/minimum cost in economics, maximum volume/minimum surface area in optimization, velocity and acceleration in physics (v = ds/dt, a = dv/dt = d²s/dt²).",
              keyPoints: [
                "Turning points: dy/dx = 0",
                "Maximum: dy/dx = 0 and d²y/dx² < 0",
                "Minimum: dy/dx = 0 and d²y/dx² > 0",
                "Velocity = ds/dt (rate of change of displacement)",
                "Acceleration = dv/dt = d²s/dt²",
                "Use differentiation for optimization problems"
              ]
            }
          ],
          objectives: [
            "Find derivatives of polynomial functions",
            "Locate maximum and minimum points on curves",
            "Apply differentiation to solve optimization problems",
            "Use differentiation in kinematics (velocity, acceleration)"
          ]
        },
        {
          title: "Integration",
          subtopics: [
            {
              title: "Integration as Reverse of Differentiation",
              content: "Integration is the inverse operation of differentiation. If dy/dx = f(x), then y = ∫f(x)dx. The integral includes a constant of integration (C) because differentiation of constants gives 0. Basic rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ -1). Example: ∫x² dx = x³/3 + C. Definite integrals have limits and give specific values (no +C): ∫ₐᵇ f(x)dx.",
              keyPoints: [
                "Integration is anti-differentiation",
                "∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
                "Always add constant C for indefinite integrals",
                "∫k dx = kx + C (k is constant)",
                "Integrate term by term"
              ]
            },
            {
              title: "Area Under Curves",
              content: "The definite integral ∫ₐᵇ f(x)dx gives the area between the curve y = f(x), the x-axis, and the vertical lines x = a and x = b. To evaluate: find the indefinite integral F(x), then calculate F(b) - F(a). This is written [F(x)]ₐᵇ. If the curve is below the x-axis, the integral gives a negative value; take absolute value for area. For area between two curves: ∫ₐᵇ [f(x) - g(x)]dx.",
              keyPoints: [
                "Area = ∫ₐᵇ f(x)dx where f(x) ≥ 0",
                "[F(x)]ₐᵇ = F(b) - F(a)",
                "Area below x-axis gives negative integral",
                "Area between curves: ∫[upper - lower]dx",
                "Split integral if curve crosses x-axis"
              ]
            }
          ],
          objectives: [
            "Find indefinite integrals of polynomial functions",
            "Evaluate definite integrals",
            "Calculate areas under curves",
            "Find areas between curves"
          ]
        }
      ]
    }
  },
  {
    id: "math-note-005",
    subjectId: "mathematics",
    title: "Statistics and Probability",
    order: 5,
    content: {
      overview: "Statistics is the science of collecting, organizing, analyzing, and interpreting data. Probability quantifies the likelihood of events occurring. Together, they provide tools for making informed decisions in the face of uncertainty.",
      topics: [
        {
          title: "Data Presentation",
          subtopics: [
            {
              title: "Types of Data and Frequency Tables",
              content: "Data can be qualitative (categorical, e.g., colors, names) or quantitative (numerical). Quantitative data can be discrete (countable, e.g., number of students) or continuous (measurable, e.g., height, weight). Frequency table shows how often each value occurs. Grouped frequency table groups data into class intervals when dealing with large datasets. Class boundaries, midpoints, and width are important concepts.",
              keyPoints: [
                "Qualitative data: categories (non-numerical)",
                "Quantitative data: numerical values",
                "Discrete: countable values",
                "Continuous: measurable values (any value in range)",
                "Frequency = number of times value occurs",
                "Class width = upper boundary - lower boundary"
              ]
            },
            {
              title: "Charts and Graphs",
              content: "Bar chart: rectangular bars for categorical data, heights show frequencies. Histogram: similar to bar chart but for continuous data, no gaps between bars. Pie chart: circle divided into sectors, angle = (frequency/total) × 360°. Line graph: shows trends over time. Frequency polygon: line graph connecting midpoints of histogram bars. Cumulative frequency curve (ogive): shows running total of frequencies.",
              keyPoints: [
                "Bar chart: categorical data, gaps between bars",
                "Histogram: continuous data, no gaps",
                "Pie chart: angle = (frequency/total) × 360°",
                "Line graph: shows trend over time",
                "Cumulative frequency: running total"
              ]
            }
          ],
          objectives: [
            "Construct frequency tables for raw data",
            "Draw and interpret various statistical charts",
            "Choose appropriate chart type for given data",
            "Read and extract information from charts and graphs"
          ]
        },
        {
          title: "Measures of Central Tendency",
          subtopics: [
            {
              title: "Mean, Median, and Mode",
              content: "Mean (average): sum of all values divided by number of values. For grouped data: mean = Σ(fx)/Σf where f is frequency and x is midpoint. Median: middle value when data is arranged in order; for even number of values, average the two middle values. From cumulative frequency: median is at (n/2)th position. Mode: most frequently occurring value. For grouped data: modal class is the class with highest frequency.",
              keyPoints: [
                "Mean = sum of values / number of values",
                "Mean for grouped data = Σ(fx)/Σf",
                "Median: middle value (arrange data first)",
                "Mode: most frequent value",
                "Mean affected by extreme values, median more robust"
              ]
            }
          ],
          objectives: [
            "Calculate mean, median, and mode for raw and grouped data",
            "Choose appropriate measure of central tendency",
            "Use cumulative frequency to find median",
            "Interpret measures of central tendency in context"
          ]
        },
        {
          title: "Measures of Dispersion",
          subtopics: [
            {
              title: "Range and Standard Deviation",
              content: "Range: difference between largest and smallest values (Range = max - min). Simple but affected by outliers. Standard deviation (σ or s): measures average distance from mean, gives better picture of spread. Variance = (standard deviation)². Formula: σ = √[Σ(x - x̄)²/n] or σ = √[Σx²/n - (Σx/n)²]. Larger standard deviation means more spread out data.",
              keyPoints: [
                "Range = maximum - minimum",
                "Standard deviation measures spread around mean",
                "Variance = (standard deviation)²",
                "Small SD: data clustered near mean",
                "Large SD: data spread out",
                "SD always positive or zero"
              ]
            }
          ],
          objectives: [
            "Calculate range for given data",
            "Calculate standard deviation",
            "Interpret measures of dispersion",
            "Compare variability in different datasets"
          ]
        },
        {
          title: "Probability",
          subtopics: [
            {
              title: "Basic Probability",
              content: "Probability measures the likelihood of an event occurring. P(event) = (number of favorable outcomes)/(total number of possible outcomes). Probability ranges from 0 (impossible) to 1 (certain). P(A') = 1 - P(A) where A' is the complement of A. For equally likely outcomes: P(event) = n(event)/n(sample space).",
              keyPoints: [
                "P(event) = favorable outcomes / total outcomes",
                "0 ≤ P(event) ≤ 1",
                "P(certain event) = 1",
                "P(impossible event) = 0",
                "P(A') = 1 - P(A) where A' is 'not A'",
                "Sum of all probabilities in sample space = 1"
              ]
            },
            {
              title: "Combined Probabilities",
              content: "Addition rule for mutually exclusive events (can't happen together): P(A or B) = P(A) + P(B). For non-mutually exclusive events: P(A or B) = P(A) + P(B) - P(A and B). Multiplication rule for independent events (one doesn't affect the other): P(A and B) = P(A) × P(B). For dependent events: P(A and B) = P(A) × P(B|A) where P(B|A) is conditional probability.",
              keyPoints: [
                "Mutually exclusive: P(A or B) = P(A) + P(B)",
                "General addition: P(A or B) = P(A) + P(B) - P(A and B)",
                "Independent events: P(A and B) = P(A) × P(B)",
                "Dependent events use conditional probability",
                "'And' usually means multiply, 'or' usually means add"
              ]
            },
            {
              title: "Tree Diagrams",
              content: "Tree diagrams show all possible outcomes of a sequence of events. Each branch represents a possible outcome with its probability. Multiply probabilities along branches for combined probability. Add probabilities of different paths for 'or' situations. Useful for dependent events (probabilities change based on previous outcomes) and for visualizing complex probability problems.",
              keyPoints: [
                "Each branch shows one outcome and its probability",
                "Probabilities on all branches from same point sum to 1",
                "Multiply along branches for 'and'",
                "Add different paths for 'or'",
                "Very useful for multi-stage experiments"
              ]
            }
          ],
          objectives: [
            "Calculate probabilities of single events",
            "Apply addition and multiplication rules",
            "Use tree diagrams for complex probability problems",
            "Distinguish between independent and dependent events"
          ]
        }
      ]
    }
  }
];
