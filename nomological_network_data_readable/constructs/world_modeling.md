# World modeling
**Type:** Construct  
**Referenced in:** 16 papers  
**Also known as:** Causal world model, World model, Latent world model, Mathematical world-model, Event understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define world modeling as a model or agent's latent internal representation of an environment or domain's mechanisms, entities, rules, dynamics, or causal structure, which supports prediction or reasoning about outcomes and action effects. A few papers phrase this in narrower settings such as token sequences, input contexts, mathematics, or web tasks, but they still target the same core property in different applications rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage treats world modeling as a latent or internal representation, or the latent ability to build one, that captures an environment's mechanics, dynamics, rules, or state space so a model can understand observations and predict outcomes. Many papers phrase this in terms of predicting action effects or future states, while others emphasize reasoning about underlying principles and causalities, or uncovering deeper truths behind observed sequences. A smaller line of work narrows the construct to specific settings: a causal world model over cause-effect relations among tokens, a latent world model maintained in activations over entities and relations in context, a mathematical world-model over concepts and structures, or event understanding of how actions change a web page or application. The main variation is between world modeling as a broad latent ability and world model as the internal representation itself, with further variation in whether the content is general environment dynamics or domain-specific causal or structural content.

**Space of facets.** Papers use both world modeling and world model, usually separating the ability from the latent structure it builds or uses. One formalization describes a postulated world model as a state space together with a mapping from inputs to latent states, while another breaks acting as a world model into state-tracking, legal move prediction, and terminal state detection. Named variants include causal world model, latent world model, and mathematical world-model, and some papers distinguish the latent world model from decoded outputs by suggesting that internal world states can remain faithful even when outputs are false or unfaithful. In web-oriented work, the neighboring label event understanding is used for inferring what happens in a task and how actions change page state.

**Space of measurement.** No measurement instrument is linked to world modeling, so papers do not record a benchmark, human evaluation, LLM-as-a-judge, or named probe as directly measuring it. It is instead connected to four behavioral indicators, action selection, future prediction, legal move generation, and robotic manipulation, and to three constructs, with planning appearing most often, followed by agency and inductive bias. In practice, papers make the construct observable through whether a model can foresee action outcomes without executing them, predict the next observation, track game state and legal moves, or extract latent world states as logical propositions; these usages mostly match the dominant definitions' focus on dynamics and prediction, though some narrow the construct to specific domains.

**Links.** Several papers claim a causal relationship from world modeling to planning, including claims that synthesized code world models can be used for planning and that world modeling objectives enhance planning capabilities. Single papers also claim causal relationships from world modeling to agency, action selection, and robotic manipulation. Separately, future prediction, legal move generation, and inductive bias are each reported as related to world modeling: one paper says learning environment dynamics helps an agent foresee the next observation, another says acting as a world model requires state-tracking, legal move prediction, and terminal state detection, and another says a foundation model's inductive bias reveals its world model.

## Sources

**[Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf)**
> The latent ability of an agent to build an internal representation of an environment's mechanics to understand observations and predict outcomes.

**[What Has a Foundation Model Found? Using Inductive Bias to Probe for World Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vafa25a/vafa25a.pdf) (as "World model")**
> A latent, structured understanding of the underlying mechanisms, rules, or state space that generates the observed data.

**[A Causal World Model Underlying Next Token Prediction: Exploring GPT in a Controlled Environment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yehezkel-rohekar25a/yehezkel-rohekar25a.pdf) (as "Causal world model")**
> A latent structural representation of cause-effect relationships among tokens in a sequence, which the model uses to generate outputs consistent with domain rules, even in out-of-distribution settings.

**[Monitoring Latent World States in Language Models with Propositional Probes](https://proceedings.iclr.cc/paper_files/paper/2025/file/3132d0405fabe24b2a7b6cd7ba9de6b5-Paper-Conference.pdf) (as "Latent world model")**
> An internal, structured representation of the entities and relationships described in an input context, which the language model is hypothesized to construct and maintain in its activations.

**[Can Transformers Do Enumerative Geometry?](https://proceedings.iclr.cc/paper_files/paper/2025/file/aee2f03ecb2b2c1ea55a43946b651cfd-Paper-Conference.pdf) (as "Mathematical world-model")**
> An internalized, coherent understanding of mathematical concepts, relationships, and structures that goes beyond surface-level pattern matching.

**[Synatra: Turning Indirect Knowledge into Direct Demonstrations for Digital Agents at Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/a6a6891cf1dfc64d664f086cf5976e93-Paper-Conference.pdf) (as "Event understanding")**
> The ability to infer what happens in a task scenario and how actions change the state of a web page or application.

## Relationships

### World modeling →
- **Planning** (constructs) — *causes*
  > we show that the Code World Models synthesized with it can be successfully used for planning
  - [Generating Code World Models with Large Language Models Guided by Monte Carlo Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/6f479ea488e0908ac8b1b37b27fd134c-Paper-Conference.pdf)
- **Robotic manipulation** (behaviors tasks) — *causes*
  > In addition, 3D-VLA [60] and Daydreamer [56] have also tried to introduce world models into robot manipulation to help the models free themselves from a large amount of trial and error and improve learning efficiency. (Section 1)
  - [PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation](https://proceedings.neurips.cc/paper_files/paper/2024/file/6164b6e5352c139e9ddc1a98c09e4e4a-Paper-Conference.pdf)
- **Agency** (constructs) — *causes*
  > Emergent agentic abilities are strongly dependent on basic abilities like grounding, world modeling, and self-reflection.
  - [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Action selection** (behaviors tasks) — *causes*
  > a World-model-augmented (WMA) web agent, which simulates the outcomes of its actions for better decision-making. (ABSTRACT)
  - [Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a00548031e4647b13042c97c922fadf1-Paper-Conference.pdf)

### Associated with
- **Future prediction** (behaviors tasks)
  > this LLM learns the environment dynamics, working as a world model that helps the web agent to foresee the potential outcome (i.e., predict the next observation) of its action. (Section 4.1.3)
  - [Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a00548031e4647b13042c97c922fadf1-Paper-Conference.pdf)
- **Legal move generation** (behaviors tasks)
  > Acting as world model further requires the following capabilities: (i) state-tracking (determining the new state of the game after a move has been played in the previous state), (ii) legal move prediction, (iii) terminal state detection. (Section 2)
  - [Mastering Board Games by External and Internal Planning with Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schultz25a/schultz25a.pdf)
- **Inductive bias** (constructs)
  > Similarly, the inductive bias of a foundation model reveals its world model.
  - [What Has a Foundation Model Found? Using Inductive Bias to Probe for World Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vafa25a/vafa25a.pdf)
