# Exploration ability
**Type:** Construct  
**Referenced in:** 26 papers  
**Also known as:** Exploration, Exploration capability, Self-exploration, Parallel search, Search  

## State of the Field

**Definition agreement:** Conflicting. Most papers define exploration ability as a model or agent's propensity to search broadly through a problem or solution space by generating diverse reasoning paths, hypotheses, programs, or next steps. But a substantial minority define it instead as environmental exploration, such as visiting novel states or navigating to find objects or information, which applies the construct to external action in an environment rather than internal reasoning search, so they are not all studying the same thing.

**Space of definitions.** Across papers, the prevailing usage frames exploration ability as breadth of search: searching broadly across a solution, reasoning, or problem space, generating diverse trajectories or candidate answers, and discovering useful states or solution paths rather than only refining an existing one. Several authors explicitly cast it as a latent ability, capability, tendency, or disposition, while a smaller line defines it behaviorally, as actively searching an environment, visiting new states, or exploring multiple distinct paths in parallel. A narrower variant, self-exploration, focuses on identifying flaws in the model's own reasoning and producing alternative paths without external intervention.

**Space of facets.** Papers systematize the construct mainly through recurring contrasts and variants rather than a single taxonomy. A common contrast is exploration versus exploitation, with related language about search diversity, sampling diversity, exploratory branches, and breadth before committing to a hypothesis; embodied-task papers instead center exploration of objects, information, or new regions in partially observed environments. Some authors use search for closely similar content in program and puzzle settings, while one paper narrows the idea to parallel search within a single iteration and another narrows it to self-exploration alongside self-reflection.

**Space of measurement.** No measurement instrument is linked to it, and papers link it to 2 behavioral indicators, Sudoku solving and Variable assignment. In practice, authors operationalize the construct through proxies such as pass@k, especially relative to pass@1, as an indicator of diverse reasoning paths, increased sampling diversity or oversampling, exploratory branches in reasoning trees, parallel search within prompts, and exploratory questions early in interaction. These operationalizations mostly follow the same emphasis on diversity of paths and broad search, although some papers use directly observable behavior rather than a latent disposition.

**Links.** In "Causal language modeling can elicit search and reasoning capabilities on logic puzzles," one paper claims a causal relationship from exploration ability to Sudoku solving, describing Sudoku solution as involving search for a cell position where a subset of the strategies can be applied. In "Selective Attention Improves Transformer," another paper reports that exploration ability is related to Variable assignment, describing Variable Assignment as a generalization of the Search problem.

## Sources

**[Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf) (as "Exploration capability")**
> The latent ability of an agent to discover useful states and solution paths in environments that require systematic search over long horizons.

**[SFS: Smarter Code Space Search improves LLM Inference Scaling](https://proceedings.iclr.cc/paper_files/paper/2025/file/387982dbf23d9975c7fc45813dd3dabc-Paper-Conference.pdf) (as "Exploration")**
> The process of searching broadly across a solution space to discover varied and potentially novel solutions, rather than focusing only on refining existing ones.

**[MARGE: Improving Math Reasoning with Guided Exploration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25h/gao25h.pdf)**
> The tendency of a model to generate diverse reasoning paths and cover more of the solution space when producing multiple candidate answers.

**[Satori: Reinforcement Learning with Chain-of-Action-Thought Enhances LLM Reasoning via Autoregressive Search](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25o/shen25o.pdf) (as "Self-exploration")**
> The latent ability of a model to identify flaws in its reasoning and generate alternative solution paths without external intervention.

**[Execution-guided within-prompt search for programming-by-example](https://proceedings.iclr.cc/paper_files/paper/2025/file/98e967164ae2f6811b975d686dece3eb-Paper-Conference.pdf) (as "Parallel search")**
> An observable search behavior where the model explores multiple distinct solution paths or program fragments within a single iteration.

**[The KoLMogorov Test: Compression by Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/db1d69ee01c2b42554f8e14e6f8ca8b6-Paper-Conference.pdf) (as "Search")**
> The latent ability to explore candidate programs and find one that matches the target sequence under a shortest-program criterion.

## Relationships

### Associated with
- **Sudoku solving** (behaviors tasks)
  > “The iterative process of solving Sudokus can be broken down into two steps: (1) searching and finding a cell position where we can apply a subset of the strategies”
  - [Causal language modeling can elicit search and reasoning capabilities on logic puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b31ca159553d5593e62d7b998d63ea-Paper-Conference.pdf)
- **Data contamination** (constructs)
  > “Using Search , we provide a contamination analysis of 82 datasets for four popular corpora”
  - [What's In My Big Data?](https://proceedings.iclr.cc/paper_files/paper/2024/file/1f7336fd66b6e6e63d1801fdd5930a5a-Paper-Conference.pdf)
