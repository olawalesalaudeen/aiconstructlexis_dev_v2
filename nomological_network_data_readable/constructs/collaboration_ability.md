# Collaboration ability
**Type:** Construct  
**Referenced in:** 12 papers  
**Also known as:** Collaboration, Coordination, Collaborative ability, Collaborativeness, Coordination ability, Collaboration capability, Collaborative capability, Model coordination  

## State of the Field

**Definition agreement:** Consensus. Most papers define collaboration ability as an agent or model's capacity to work with other agents or humans by coordinating or aligning actions toward a shared or mutually beneficial task outcome. A few papers narrow this to particular mechanisms or settings such as shared conventions, iterative discussion, diverse teammates, or human partners, and one paper operationalizes it via gains from other models' responses, but the dominant usage is the same core property.

**Space of definitions.** Most papers treat collaboration ability as a latent capacity to work or coordinate with another agent toward a shared or mutually beneficial outcome. In this prevailing framing, the construct covers aligning actions, establishing shared conventions, organizing actions with a partner to avoid redundant or conflicting effort, or collaborating through iterative discussion; some papers narrow the partner setting to diverse teammates or human users and define the ability as dynamic adaptation during cooperation. A smaller line of work uses the label for an observable tendency, namely better response quality when other models' outputs are provided as context, and another broader framing describes collaboration as AI systems jointly performing tasks within a distributed ecosystem of specialized agents.

**Space of facets.** Across the literature, collaboration, coordination, collaborative ability, coordination ability, and model coordination are used for overlapping cooperative capacities, but the facets emphasized differ. One paper breaks collaboration capability into two components, initiating collaboration and responding to collaboration, while others center coordination on common knowledge, alignment with teammates' preferred coordination behaviors, or adaptation to previously unseen human users. The labels are therefore only partly interchangeable: coordination is often the mechanism highlighted inside broader collaboration framings, whereas collaborativeness names a different phenomenon, improved responses from using other models' outputs as context.

**Space of measurement.** No measurement instrument is linked to it, and only one behavioral indicator is linked to it, Text generation. Papers instead operationalize the construct through concrete cooperative behaviors and settings, such as working toward mutually beneficial outcomes in non-zero-sum games, achieving implicit collaboration across repeated interactions, organizing actions with a partner in household tasks, adapting to unseen teammates or users, and using process-oriented metrics around initiating and responding to collaborative requests. These operationalizations do not fully coincide, because most definitions cast the construct as a latent capacity, while one paper treats it as the observable tendency to produce better responses when other model outputs are available.

**Links.** One paper claims a causal relationship from collaboration ability to Text generation, describing better language generation when multiple LLMs' outputs are leveraged together. One paper also reports that collaboration ability is related to Help-seeking, because collaboration capability is defined to include both initiating collaboration and responding to collaborative requests.

## Sources

**[GTBench: Uncovering the Strategic Reasoning Capabilities of LLMs via Game-Theoretic Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/3191170938b6102e5c203b036b7c16dd-Paper-Conference.pdf) (as "Collaboration")**
> The tendency or ability to work with another agent towards a mutually beneficial outcome, particularly in non-zero-sum games.

**[Secret Collusion among AI Agents: Multi-Agent Deception via Steganography](https://proceedings.neurips.cc/paper_files/paper/2024/file/861f7dad098aec1c3560fb7add468d41-Paper-Conference.pdf) (as "Coordination")**
> The latent ability of agents to align their actions or establish shared conventions, which is mutually dependent on common knowledge.

**[ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf) (as "Collaborative ability")**
> The latent capacity of a model or model team to work with another agent through iterative discussion to solve tasks effectively.

**[Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf) (as "Collaborativeness")**
> The tendency of a language model to improve its response quality when provided with responses from other models as context.

**[LLM-Assisted Semantically Diverse Teammate Generation for Efficient Multi-agent Coordination](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dq/li25dq.pdf) (as "Coordination ability")**
> The latent capacity of an agent to effectively collaborate with diverse teammates by aligning its actions with their preferred coordination behaviors.

**[Collab-Overcooked: Benchmarking and Evaluating Large Language Models as Collaborative Agents](https://aclanthology.org/2025.emnlp-main.249.pdf) (as "Collaboration capability")**
> The composite ability of an agent to effectively initiate and respond to collaborative requests to solve tasks that cannot be completed alone.

**[How to Enable Effective Cooperation Between Humans and NLP Models: A Survey of Principles, Formalizations, and Beyond](https://aclanthology.org/2025.acl-long.22.pdf) (as "Model coordination")**
> The latent ability of a model to adapt its behavior dynamically to align with diverse human users during cooperation without prior retraining.

## Relationships

### Associated with
- **Help-seeking** (constructs)
  > we define collaboration capability as comprising two essential components: the capability to initiate collaboration... and the capability to respond to collaboration... (Section 3.1)
  - [Collab-Overcooked: Benchmarking and Evaluating Large Language Models as Collaborative Agents](https://aclanthology.org/2025.emnlp-main.249.pdf)
- **Text generation quality** (constructs)
  > "we identify an inherent phenomenon we term the collaborativeness of LLMs — wherein an LLM tends to generate better responses when presented with outputs from other models"
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
