# Token diversity
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Token Diversity  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the available definitions, the prevailing usage is highly aligned: papers describe token diversity as variation in the tokens a model generates, often explicitly as entropy or richness in the output distribution rather than repetition. One definition frames it as a varied token distribution instead of repetitive tokens, and another uses nearly the same idea in terms of variation and entropy in produced tokens. The shared focus is on a property of generated outputs during generation, with little disagreement beyond wording.

**Space of facets.** Systematization is light, and the clearest organizing distinction is between varied, higher-entropy token distributions and repetitive token use. One paper explicitly says it introduces "three additional metrics that evaluate token diversity," and names Token Entropy as measuring the diversity of tokens in the model's output. Another definition folds entropy directly into the construct itself by describing it as variation and entropy in produced tokens.

**Space of measurement.** It is linked to no measurement instruments and no behavioral indicators. Still, the papers that define it make the operationalization fairly explicit at the token level: one study evaluates it with additional metrics and states that Token Entropy measures diversity in the model's output tokens. This operationalization matches the dominant definition, which treats the construct as variation or entropy in generated tokens rather than repetitive output.

**Links.** The recorded links are limited to 2 construct-level causal claims. One paper claims a causal relationship from token diversity to representation collapse, stating that better token diversity is able to "slow down representation collapse phenomenon in transformers." Another paper claims a causal relationship from token diversity to text generation quality, reporting that reduced generation diversity under inaccurate categorical sampling leads to unfair evaluations of generative performance.

## Sources

**[A Closer Look at Machine Unlearning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b7db41ea66d624587f211aa15c07e45-Paper-Conference.pdf)**
> The extent to which generated output uses a varied token distribution rather than repetitive tokens.

**[Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf) (as "Token Diversity")**
> The degree of variation and entropy in the tokens produced by the model during generation, reflecting the richness of the output distribution.

## Relationships

### Token diversity →
- **Text generation quality** (constructs) — *causes*
  > However, when we check the generated content, we discover that the quality is compromised by low token diversity
  - [Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf)
