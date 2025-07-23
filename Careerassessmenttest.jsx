import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, RotateCcw, Target } from 'lucide-react';

const CareerAssessmentTest = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  const personalityTraits = [
    {
      category: "Extraversion",
      questions: [
        "I feel energized when I'm around other people",
        "I enjoy being the center of attention at social gatherings",
        "I often initiate conversations with strangers",
        "I prefer working in teams rather than alone",
        "I tend to be talkative and outgoing in most situations"
      ]
    },
    {
      category: "Introversion", 
      questions: [
        "I need quiet time alone to recharge after social interactions",
        "I prefer having a few close friends rather than many acquaintances",
        "I think carefully before speaking in group discussions",
        "I feel more comfortable observing rather than participating in large groups",
        "I prefer written communication over phone calls or face-to-face meetings"
      ]
    },
    {
      category: "Openness to Experience",
      questions: [
        "I enjoy trying new foods, activities, and experiences",
        "I'm curious about different cultures and ways of thinking",
        "I often question traditional ways of doing things",
        "I enjoy abstract discussions about ideas and concepts",
        "I'm drawn to art, music, and creative expressions"
      ]
    },
    {
      category: "Conscientiousness",
      questions: [
        "I always complete tasks on time or ahead of schedule",
        "I keep my workspace and living area well-organized",
        "I make detailed plans before starting important projects",
        "I rarely procrastinate on important tasks",
        "I pay close attention to rules and procedures"
      ]
    },
    {
      category: "Neuroticism",
      questions: [
        "I often worry about things that might go wrong",
        "My mood can change quickly throughout the day",
        "I get stressed easily when facing deadlines or pressure",
        "I tend to focus on negative aspects of situations",
        "I have trouble staying calm during conflicts or crises"
      ]
    },
    {
      category: "Risk Tolerance",
      questions: [
        "I'm comfortable making decisions without having all the information",
        "I enjoy activities that involve some element of danger or uncertainty",
        "I'm willing to invest money in high-risk, high-reward opportunities",
        "I often take chances even when the outcome is uncertain",
        "I prefer trying new approaches rather than sticking to proven methods"
      ]
    },
    {
      category: "Adaptability",
      questions: [
        "I adjust quickly when plans change unexpectedly",
        "I'm comfortable working in constantly changing environments",
        "I can easily switch between different types of tasks",
        "I remain calm and flexible when facing unexpected challenges",
        "I enjoy variety and change in my daily routine"
      ]
    },
    {
      category: "Leadership",
      questions: [
        "Others often look to me for direction in group situations",
        "I'm comfortable making decisions that affect other people",
        "I enjoy motivating and inspiring team members",
        "I naturally take charge when no one else is leading",
        "I'm good at delegating tasks and coordinating group efforts"
      ]
    },
    {
      category: "Independence",
      questions: [
        "I prefer making decisions on my own rather than seeking input from others",
        "I work best when I have minimal supervision",
        "I rely on my own judgment rather than following others' advice",
        "I'm comfortable taking full responsibility for my choices",
        "I value self-reliance over depending on others for help"
      ]
    },
    {
      category: "Security Seeking",
      questions: [
        "I prefer jobs with stable income over high-risk, high-reward positions",
        "I like having a predictable routine in my daily life",
        "I save money regularly for future security",
        "I prefer familiar situations over uncertain ones",
        "I value job security and benefits over exciting but unstable opportunities"
      ]
    },
    {
      category: "Optimism",
      questions: [
        "I generally expect good things to happen in the future",
        "I tend to see the positive side of difficult situations",
        "I believe that hard work will eventually pay off",
        "I maintain hope even when facing significant challenges",
        "I focus more on opportunities than on potential problems"
      ]
    },
    {
      category: "Self-Confidence",
      questions: [
        "I believe in my ability to handle whatever challenges come my way",
        "I'm comfortable expressing my opinions even when others disagree",
        "I trust my own judgment when making important decisions",
        "I feel confident in my skills and abilities",
        "I'm not easily discouraged by criticism or setbacks"
      ]
    },
    {
      category: "Conflict Handling",
      questions: [
        "I address disagreements directly rather than avoiding them",
        "I remain calm and rational during heated discussions",
        "I look for win-win solutions when conflicts arise",
        "I'm comfortable having difficult conversations when necessary",
        "I can separate personal feelings from professional disagreements"
      ]
    },
    {
      category: "Innovation/Creativity",
      questions: [
        "I often come up with original ideas and solutions",
        "I enjoy brainstorming and thinking outside the box",
        "I like to experiment with new ways of doing things",
        "I'm good at combining existing ideas in novel ways",
        "I often see possibilities that others miss"
      ]
    },
    {
      category: "Traditionalism",
      questions: [
        "I believe that established customs and practices are usually best",
        "I value traditions and conventional ways of doing things",
        "I'm cautious about adopting new trends or innovations",
        "I respect authority and hierarchical structures",
        "I believe that time-tested methods are more reliable than new approaches"
      ]
    },
    {
      category: "Anger Management",
      questions: [
        "I rarely lose my temper, even in frustrating situations",
        "I can control my emotions when someone criticizes me unfairly",
        "I take time to cool down before responding to upsetting situations",
        "I express disagreement without becoming hostile or aggressive",
        "I can discuss sensitive topics without getting emotionally heated"
      ]
    },
    {
      category: "Attention to Detail",
      questions: [
        "I notice small errors that others often miss",
        "I double-check my work to ensure accuracy",
        "I'm thorough in completing tasks, even minor ones",
        "I pay attention to the fine points rather than just the big picture",
        "I prefer precise instructions over general guidelines"
      ]
    },
    {
      category: "Decision-Making Style",
      questions: [
        "I make decisions quickly without excessive deliberation",
        "I trust my gut instincts when choosing between options",
        "I'm comfortable making important decisions under time pressure",
        "I don't need to analyze every possible outcome before deciding",
        "I prefer to act decisively rather than postponing choices"
      ]
    },
    {
      category: "Information Processing Speed",
      questions: [
        "I quickly understand new concepts and instructions",
        "I can rapidly analyze complex information and data",
        "I'm often the first to grasp the main points in discussions",
        "I process written material faster than most people",
        "I can quickly switch my attention between different topics"
      ]
    },
    {
      category: "Social Confidence",
      questions: [
        "I feel comfortable introducing myself to new people",
        "I can easily start conversations at social events",
        "I'm at ease when speaking to groups of people",
        "I don't worry much about what others think of me",
        "I can handle social rejection without it affecting my self-esteem"
      ]
    },
    {
      category: "Entrepreneurial Spirit",
      questions: [
        "I'm interested in starting my own business or venture",
        "I enjoy identifying new market opportunities",
        "I'm willing to work long hours to build something from scratch",
        "I'm comfortable with the uncertainty that comes with new ventures",
        "I prefer creating something new rather than managing existing operations"
      ]
    },
    {
      category: "Multitasking",
      questions: [
        "I can effectively handle several projects simultaneously",
        "I'm comfortable switching between different types of work",
        "I can maintain focus on multiple priorities at once",
        "I work well in environments with many competing demands",
        "I can juggle various responsibilities without feeling overwhelmed"
      ]
    }
  ];

  const preferences = [
    {
      category: "Relocation Flexibility",
      question: "How flexible are you regarding relocation for work?",
      options: [
        "Unable to relocate - Must stay in current city/location",
        "Can relocate within the same state/region only", 
        "Can relocate to any major city within the country",
        "Can relocate anywhere domestically",
        "Open to international relocation"
      ]
    },
    {
      category: "Technical Work Inclination",
      question: "What's your preference for technical/analytical work?",
      options: [
        "Strongly avoid technical/analytical work",
        "Prefer minimal technical involvement",
        "Comfortable with moderate technical work",
        "Enjoy technical challenges and problem-solving",
        "Prefer highly technical and specialized work"
      ]
    },
    {
      category: "Field Work vs Office Work",
      question: "What's your preference between field work and office work?",
      options: [
        "Strongly prefer office-based work only",
        "Prefer office work but can do occasional field work",
        "Comfortable with mix of office and field work",
        "Prefer field work over office work",
        "Want primarily field-based work"
      ]
    },
    {
      category: "Industry Preference - Shipping/Maritime",
      question: "How interested are you in the shipping/maritime industry?",
      options: [
        "No interest in shipping/maritime industry",
        "Open to shipping industry if other factors align",
        "Neutral about shipping industry",
        "Interested in shipping/maritime sector",
        "Specifically want to work in shipping/maritime industry"
      ]
    },
    {
      category: "Remuneration Expectations",
      question: "How important is salary in your career decisions?",
      options: [
        "High salary is a top priority",
        "Need competitive market-rate compensation",
        "Salary important but not the deciding factor",
        "Can accept below-market pay for right opportunity",
        "Willing to work for significantly lower pay if needed"
      ]
    },
    {
      category: "Work-Life Balance Priority",
      question: "How do you prioritize work-life balance?",
      options: [
        "Work-life balance is my top priority",
        "Strong preference for balanced lifestyle",
        "Balance is important but flexible when needed",
        "Can sacrifice balance for career growth",
        "Career advancement takes priority over balance"
      ]
    },
    {
      category: "Business Travel Acceptance",
      question: "How comfortable are you with business travel?",
      options: [
        "Cannot travel for work",
        "Very limited travel only (local/day trips)",
        "Comfortable with occasional travel (monthly)",
        "Open to regular travel (weekly/bi-weekly)",
        "Prefer jobs with extensive travel"
      ]
    }
  ];

  const careerPaths = {
    technical: {
      title: "Technical/Functional Expertise",
      description: "Technical expertise is important to you and shapes your identity",
      recommendations: [
        "Remain in shipping industry",
        "Auditor position",
        "Superintendent role"
      ],
      icon: "⚙️"
    },
    management: {
      title: "General Management",
      description: "You want high positions and to manage people",
      recommendations: [
        "Shore job in shipping or logistics",
        "Higher studies (MBA/Management)",
        "Opportunities outside shipping - operations, facilities"
      ],
      icon: "👔"
    },
    independence: {
      title: "Independence & Autonomy",
      description: "You value flexibility and autonomy in your work",
      recommendations: [
        "Onshore opportunities",
        "Pilot positions",
        "Consulting work",
        "Teaching roles",
        "Higher studies"
      ],
      icon: "🗽"
    },
    security: {
      title: "Safety & Stability",
      description: "Job and income security are your priorities",
      recommendations: [
        "Continue sailing",
        "Stable maritime positions"
      ],
      icon: "🛡️"
    },
    entrepreneurship: {
      title: "Entrepreneurship",
      description: "You're driven by new ideas and innovation",
      recommendations: [
        "Start your own business/startup",
        "Business consulting",
        "Higher studies (Entrepreneurship/Business)"
      ],
      icon: "🚀"
    },
    philanthropy: {
      title: "Philanthropy",
      description: "Service to society motivates you",
      recommendations: [
        "Start a charity (while sailing)",
        "Work with NGOs",
        "Social impact roles"
      ],
      icon: "❤️"
    },
    problemSolving: {
      title: "Complex Problem Solving",
      description: "You thrive on challenges and problem-solving",
      recommendations: [
        "Sailing on old, challenging ships",
        "Shore strategy roles",
        "Consulting for SMEs",
        "Diverse career paths",
        "Higher studies"
      ],
      icon: "🧩"
    },
    workLife: {
      title: "Work-Life Balance",
      description: "Life beyond career is important to you",
      recommendations: [
        "Sailing with shorter contracts",
        "Shore jobs (consider compensation impact)",
        "Flexible work arrangements"
      ],
      icon: "⚖️"
    }
  };

  const allQuestions = personalityTraits.flatMap(trait => 
    trait.questions.map(q => ({ category: trait.category, question: q, type: 'personality' }))
  );

  const allPreferences = preferences.map(pref => ({
    category: pref.category,
    question: pref.question,
    options: pref.options,
    type: 'preference'
  }));

  const totalQuestions = allQuestions.length + allPreferences.length;

  const handleResponse = (value) => {
    const isPersonality = currentSection === 0;
    const questionIndex = isPersonality ? currentQuestion : currentQuestion - allQuestions.length;
    
    if (isPersonality) {
      const category = allQuestions[currentQuestion].category;
      setResponses(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [currentQuestion]: value
        }
      }));
    } else {
      const category = allPreferences[questionIndex].category;
      setResponses(prev => ({
        ...prev,
        [category]: value
      }));
    }

    // Move to next question
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
      if (currentSection === 0 && currentQuestion + 1 >= allQuestions.length) {
        setCurrentSection(1);
      }
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    // Calculate personality trait scores
    const traitScores = {};
    personalityTraits.forEach(trait => {
      const traitResponses = responses[trait.category] || {};
      const scores = Object.values(traitResponses);
      traitScores[trait.category] = scores.length > 0 
        ? scores.reduce((sum, score) => sum + score, 0) / scores.length 
        : 0;
    });

    // Determine career path based on responses
    let recommendedPath = 'workLife'; // default

    // Leadership + Management oriented
    if (traitScores.Leadership > 3.5 && traitScores.Self_Confidence > 3.5) {
      recommendedPath = 'management';
    }
    // High technical inclination
    else if (responses['Technical Work Inclination'] >= 3) {
      recommendedPath = 'technical';
    }
    // High independence + low security seeking
    else if (traitScores.Independence > 3.5 && traitScores.Security_Seeking < 2.5) {
      recommendedPath = 'independence';
    }
    // High security seeking
    else if (traitScores.Security_Seeking > 3.5) {
      recommendedPath = 'security';
    }
    // High entrepreneurial spirit + risk tolerance
    else if (traitScores.Entrepreneurial_Spirit > 3.5 && traitScores.Risk_Tolerance > 3.5) {
      recommendedPath = 'entrepreneurship';
    }
    // High openness + service orientation
    else if (traitScores.Openness_to_Experience > 3.5 && traitScores.Optimism > 3.5) {
      recommendedPath = 'philanthropy';
    }
    // High problem solving + adaptability
    else if (traitScores.Innovation_Creativity > 3.5 && traitScores.Adaptability > 3.5) {
      recommendedPath = 'problemSolving';
    }
    // High work-life balance priority
    else if (responses['Work-Life Balance Priority'] <= 2) {
      recommendedPath = 'workLife';
    }

    setResponses(prev => ({ ...prev, recommendedPath, traitScores }));
    setShowResults(true);
  };

  const resetTest = () => {
    setCurrentSection(0);
    setCurrentQuestion(0);
    setResponses({});
    setShowResults(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      if (currentSection === 1 && currentQuestion - 1 < allQuestions.length) {
        setCurrentSection(0);
      }
    }
  };

  if (showResults) {
    const path = careerPaths[responses.recommendedPath];
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Career Path Results</h2>
              <p className="text-gray-600">Based on your personality traits and preferences</p>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 mb-8 text-white">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{path.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold">{path.title}</h3>
                  <p className="text-indigo-100">{path.description}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Recommended Next Steps:</h4>
                <ul className="space-y-3">
                  {path.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Your Top Traits:</h4>
                <div className="space-y-2">
                  {Object.entries(responses.traitScores || {})
                    .filter(([_, score]) => score > 3.5)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 5)
                    .map(([trait, score]) => (
                      <div key={trait} className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <span className="text-gray-700 capitalize">{trait.replace(/_/g, ' ')}</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-indigo-500 h-2 rounded-full" 
                              style={{ width: `${(score/5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{score.toFixed(1)}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={resetTest}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Take Test Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isPersonality = currentSection === 0;
  const questionIndex = isPersonality ? currentQuestion : currentQuestion - allQuestions.length;
  const currentQ = isPersonality ? allQuestions[currentQuestion] : allPreferences[questionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Maritime Career Assessment
              </h1>
              <span className="text-sm text-gray-500">
                {currentQuestion + 1} of {totalQuestions}
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {isPersonality ? 'Personality Traits' : 'Work Preferences'}
              </span>
              {isPersonality && (
                <span className="ml-2 text-gray-500 text-sm">
                  {currentQ.category}
                </span>
              )}
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQ.question}
            </h2>

            {isPersonality ? (
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleResponse(value)}
                    className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">
                        {value === 1 && "Strongly Disagree"}
                        {value === 2 && "Disagree"}
                        {value === 3 && "Neutral"}
                        {value === 4 && "Agree"}
                        {value === 5 && "Strongly Agree"}
                      </span>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`w-3 h-3 rounded-full ${
                              dot <= value ? 'bg-indigo-500' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleResponse(index)}
                    className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                  >
                    <span className="text-gray-700">{option}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={goBack}
              disabled={currentQuestion === 0}
              className="inline-flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>
            
            <div className="text-sm text-gray-500">
              Section: {isPersonality ? '1' : '2'} of 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAssessmentTest;

