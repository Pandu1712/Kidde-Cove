import {
  Mic,
  Brain,
  Hand,
  Leaf,
  BookOpen,
  Activity,
  Backpack,
  Baby,
  Users,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  images: string[];
  content: JSX.Element;
  description:string;
  
}

export const servicesData: Service[] = [
  /* ================= SPEECH THERAPY ================= */
  {
    id: "speech-therapy",
    title: "Speech Therapy",
    icon: Mic,
    description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",
    images: [
   "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.57.46_fe5bdcd5_acddhz.jpg",
   "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.57.48_49c55b82_phjfeq.jpg"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “To effectively communicate, we must realize that we are all different
          in the way we perceive the world.” — Tony Robbins
        </blockquote>

        <p>
          Speech Therapy at<b> <strong>Kiddie-Cove</strong></b> is designed to help children communicate
          with clarity, confidence, and ease. Our therapists work closely with
          each child to understand their individual strengths and areas of need.
        </p>

        <p>
          We carefully assess each child’s communication needs and create
          individualized therapy plans that support meaningful and steady
          progress.
        </p>

        <p className="text-gray-700 leading-relaxed">
  We work on{" "}
  <strong className="font-semibold text-gray-900">
    articulation, speech clarity, language development,
    vocabulary building, and both expressive and receptive language skills.
  </strong>{" "}
  Sessions are engaging and play-based, allowing children to learn
  naturally while staying motivated in a supportive environment.
</p>


        <p>
        Speech therapy also focuses on <strong>social communication</strong>, helping children

          express their thoughts, needs, and emotions effectively in everyday
          situations. Parents are actively involved through guidance and
          practical home strategies.
        </p>

        <p>
          At <strong><strong>Kiddie-Cove</strong></strong>, we believe that helping a child find their voice is the
          first step toward building confidence and connection.
        </p>

        <h4 className="font-bold mt-6">Who Can Benefit from Speech Therapy?</h4>
        <ul className="list-disc ml-6">
          <li>Children with delayed speech or language development</li>
          <li>Children who have difficulty pronouncing sounds or words</li>
          <li>Children with limited vocabulary or sentence formation</li>
          <li>Children who struggle to understand or follow instructions</li>
          <li>Children facing challenges in social communication</li>
        </ul>
      </>
    ),
  },

  /* ================= BEHAVIOURAL MODIFICATION ================= */
  {
    id: "behavioural-therapy",
    title: "Behavioural Modification Therapy",
    icon: Brain,
        description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

    images: [
      "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.57.59_c2ba1284_wn3wmv.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.00_2872b429_zs4bb8.jpg"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “The greatest discovery of my generation is that a human being can
          alter his life by altering his attitudes.” — William James
        </blockquote>

        <p>
          Behavioural Modification Therapy at <strong>Kiddie-Cove</strong> focuses on helping
          children develop positive behaviours, emotional balance, and effective
          responses to everyday situations.
        </p>

        <p>
          Therapy supports emotional regulation, cognitive thinking, attention,
          impulse control, and adaptive social skills through structured yet
          flexible approaches.
        </p>

        <p>
          Parents are guided with practical strategies to maintain consistency at
          home, helping children apply learned skills beyond the therapy setting.
        </p>

        <p>
          At <strong>Kiddie-Cove</strong>, behavioural therapy is not about correction — it is
          about understanding, guidance, and empowerment.
        </p>

        <h4 className="font-bold mt-6">
          Who Can Benefit from Behavioural Modification Therapy?
        </h4>
        <ul className="list-disc ml-6">
          <li>Children with frequent emotional outbursts</li>
          <li>Children with attention or impulse-control challenges</li>
          <li>Children facing social or adaptive behaviour difficulties</li>
          <li>Children struggling with routines or transitions</li>
          <li>Children needing support with self-regulation skills</li>
        </ul>
      </>
    ),
  },

  /* ================= OCCUPATIONAL THERAPY ================= */
  {
    id: "occupational-therapy",
    title: "Occupational Therapy (OT)",
    icon: Hand,
        description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

    images: [
     "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.55_c625f47f_uo7tqf.jpg",
     "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.55_7a5c113b_vfslbg.jpg"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “The only way to do great work is to love what you do.” — Steve Jobs
        </blockquote>

        <p>
          Occupational Therapy at <strong><strong>Kiddie-Cove</strong></strong> helps children participate
          independently and confidently in everyday activities.
        </p>

        <p>
          Therapy focuses on fine and gross motor skills, sensory integration,
          hand-eye coordination, and daily living skills such as dressing,
          feeding, writing, and play.
        </p>

        <p>
          Children also receive support in managing sensory sensitivities,
          posture, attention, and endurance. Parent involvement strengthens
          progress beyond therapy sessions.
        </p>

        <h4 className="font-bold mt-6">
          Who Can Benefit from Occupational Therapy?
        </h4>
        <ul className="list-disc ml-6">
          <li>Children with fine or gross motor delays</li>
          <li>Children with sensory processing challenges</li>
          <li>Children struggling with self-care activities</li>
          <li>Children with poor coordination or posture</li>
          <li>Children needing classroom skill support</li>
        </ul>
      </>
    ),
  },

  /* ================= ABA THERAPY ================= */
  {
    id: "aba-therapy",
    title: "ABA Therapy",
    icon: Leaf,
        description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

    images: [
      "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.00_ebba066d_ytwg4t.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.00_f4fb3436_flgzmd.jpg"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “What we learn with pleasure we never forget.” — Alfred Mercier
        </blockquote>

        <p>
          ABA Therapy at <strong><strong>Kiddie-Cove</strong></strong> is an evidence-based approach that supports
          communication, adaptive behaviour, and skill development.
        </p>

        <p>
          Therapy focuses on building new skills, reducing challenging
          behaviours, and reinforcing positive learning through structured,
          engaging sessions.
        </p>

        <p>
          Parents play a vital role in reinforcing progress at home through
          guided strategies.
        </p>

        <h4 className="font-bold mt-6">Who Can Benefit from ABA Therapy?</h4>
        <ul className="list-disc ml-6">
          <li>Children with autism spectrum disorder (ASD)</li>
          <li>Children with communication challenges</li>
          <li>Children with repetitive or challenging behaviours</li>
          <li>Children needing adaptive life skills</li>
          <li>Children benefiting from structured learning programs</li>
        </ul>
      </>
    ),
  },

  /* ================= SPECIAL EDUCATION ================= */
  {
    id: "special-education",
    title: "Special Education",
    icon: BookOpen,
        description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

    images: [
      "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.59.45_57d5f5cd_o9s4y0.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.59.45_7d8c0ac7_k29u2z.jpg"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “Education is not the filling of a pail, but the lighting of a fire.”
          — William Butler Yeats
        </blockquote>

        <p>
          Special Education at <strong><strong>Kiddie-Cove</strong></strong> provides individualized academic and
          developmental support tailored to each child’s learning abilities.
        </p>

        <p>
          Programs focus on academics, cognitive skills, social-emotional
          learning, and functional life skills through engaging teaching methods.
        </p>

        <h4 className="font-bold mt-6">
          Who Can Benefit from Special Education?
        </h4>
        <ul className="list-disc ml-6">
          <li>Children with learning delays</li>
          <li>Children with developmental disorders</li>
          <li>Children needing academic or functional support</li>
          <li>Children with attention or memory difficulties</li>
          <li>Children needing adaptive learning guidance</li>
        </ul>
      </>
    ),
  },

  /* ================= PHYSIOTHERAPY ================= */
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    icon: Activity,
        description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

    images: [
      "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_21.00.27_ea48110c_nq8uwt.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_21.00.27_4f3ef4a5_rp6geh.jpg"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “Strength does not come from physical capacity. It comes from an
          indomitable will.” — Mahatma Gandhi
        </blockquote>

        <p>
          Physiotherapy at <strong>Kiddie-Cove</strong> supports strength, balance, coordination,
          and functional movement through goal-oriented therapy.
        </p>

        <p>
          Parents are guided to reinforce exercises at home for consistent
          progress.
        </p>

        <h4 className="font-bold mt-6">Who Can Benefit from Physiotherapy?</h4>
        <ul className="list-disc ml-6">
          <li>Children with delayed gross motor development</li>
          <li>Children with balance or posture challenges</li>
          <li>Children recovering from injuries</li>
          <li>Children needing strength or endurance support</li>
          <li>Children requiring mobility guidance</li>
        </ul>
      </>
    ),
  },

  /* ================= SCHOOL READINESS ================= */
  {
    id: "school-readiness",
    title: "School Readiness Program",
    icon: Backpack,
        description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

    images: [
      "https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_5_uc5ll9.png",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_4_vkisqd.png"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “The beautiful thing about learning is that no one can take it away
          from you.” — B.B. King
        </blockquote>

        <p>
          The School Readiness Program helps children transition confidently into
          structured learning environments.
        </p>

        <h4 className="font-bold mt-6">
          Who Can Benefit from the School Readiness Program?
        </h4>
        <ul className="list-disc ml-6">
          <li>Children approaching preschool or kindergarten</li>
          <li>Children needing focus or routine support</li>
          <li>Children developing early academic skills</li>
          <li>Children learning independence skills</li>
          <li>Children adapting to structured environments</li>
        </ul>
      </>
    ),
  },

  /* ================= EARLY INTERVENTION ================= */
  {
    id: "early-intervention",
    title: "Early Intervention",
    icon: Baby,
        description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

    images: [
     
"https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_xmgzax.png",
"https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_1_enyj0g.png"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “The earlier we start, the better the foundation.” — Maria Montessori
        </blockquote>

        <p>
          Early Intervention provides timely support during critical early
          developmental years to strengthen communication, motor, and social
          skills.
        </p>

        <h4 className="font-bold mt-6">
          Who Can Benefit from Early Intervention?
        </h4>
        <ul className="list-disc ml-6">
          <li>Infants and toddlers with developmental delays</li>
          <li>Children with speech or motor challenges</li>
          <li>Children with social or emotional needs</li>
          <li>Children at risk of learning difficulties</li>
          <li>Families seeking early developmental support</li>
        </ul>
      </>
    ),
  },

  /* ================= GROUP THERAPY ================= */
  {
    id: "group-therapy",
    title: "Group Therapy",
    icon: Users,
        description:"Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

    images: [
      "https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_2_y2wdy7.png",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/Screenshot_2025-12-22_065238_mlgkq9.png"
    ],
    content: (
      <>
        <blockquote className="italic border-l-4 border-orange-400 pl-4">
          “Alone we can do so little; together we can do so much.” — Helen Keller
        </blockquote>

        <p>
          Group Therapy builds social skills, teamwork, and confidence through
          guided peer interactions.
        </p>

        <h4 className="font-bold mt-6">Who Can Benefit from Group Therapy?</h4>
        <ul className="list-disc ml-6">
          <li>Children struggling with social interaction</li>
          <li>Children needing communication support</li>
          <li>Children learning cooperation and sharing</li>
          <li>Children benefiting from peer modeling</li>
          <li>Children building confidence in group settings</li>
        </ul>
      </>
    ),
  },
];
